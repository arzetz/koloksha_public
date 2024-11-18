package handlers

import (
	"log"
	"net/http"

	db "github.com/arzetz/koloksha/database"
	"github.com/arzetz/koloksha/models"
	"github.com/gin-gonic/gin"
)

func PlaceOrder(c *gin.Context) {
	var order models.Order

	if err := c.ShouldBindJSON(&order); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	if err := db.GetDB().Create(&order).Error; err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": "Failed to place order"})
		log.Println(db.GetDB().Error)
		return
	}

	// Возвращаем успешный ответ
	c.JSON(http.StatusOK, gin.H{"message": "Order placed successfully", "order": order})
}
