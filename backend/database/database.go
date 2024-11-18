package database

import (
	"fmt"
	"log"
	"os"

	"github.com/arzetz/koloksha/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var db *gorm.DB

func init() {
	dsn := fmt.Sprintf("host=db user=kolasf0963 password=0963aLeX$ dbname=koloksha_orders port=5432 sslmode=disable")

	var err error
	db, err = gorm.Open(postgres.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})

	if err != nil {
		log.Fatal("Failed to connect to database. \n", err)
	}

	log.Println("connected")
	db.Logger = logger.Default.LogMode(logger.Info)

	log.Println("running migrations")
	db.AutoMigrate(&models.Order{})
}

func GetDB() *gorm.DB {
	return db
}
