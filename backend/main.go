package main

import (
	"net/http"
	"os"
	"time"

	"github.com/arzetz/koloksha/handlers"
	"github.com/gin-gonic/gin"
)

func main() {
	router := gin.Default()

	router.GET("/", func(c *gin.Context) {
		data, err := os.ReadFile("image.png")
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		c.Header("Cache-Control", "public, max-age=3600")
		c.Header("Expires", time.Now().Add(time.Hour).Format(time.RFC1123))
		c.Data(http.StatusOK, "image/png", data)
	})

	router.POST("/api/place_order", handlers.PlaceOrder)

	router.Run(":8082")
}
