package models

import "gorm.io/gorm"

type Order struct {
	gorm.Model
	User_Name    string `json:"name" gorm:"text;not null;default:null"`
	Phone_Number string `json:"phone" gorm:"text;not null;default:null"`
}
