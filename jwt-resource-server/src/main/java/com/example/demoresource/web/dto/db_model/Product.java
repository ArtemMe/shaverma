package com.example.demoresource.web.dto.db_model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name="products")
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO) //если тип авто то генерация ключей происходит в зависимотси от БД в Mysql - indentity в postgresql очереди итп
    @Column(name="product_id")
    long id;
    @NotNull
    String img;
    @NotNull
    String title;
    @NotNull
    String comment;
    @NotNull
    float cost;

    public Product(String img, String title, String comment, float cost) {
        this.img = img;
        this.title = title;
        this.comment = comment;
        this.cost = cost;
    }

    public Product() {
    }


    public float getCost() {
        return cost;
    }

    public void setCost(float cost) {
        this.cost = cost;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getComment() {
        return comment;
    }

    public void setComment(String comment) {
        this.comment = comment;
    }
    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
