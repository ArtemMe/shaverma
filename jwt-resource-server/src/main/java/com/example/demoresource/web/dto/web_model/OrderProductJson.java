package com.example.demoresource.web.dto.web_model;

public class OrderProductJson {
    long productId;
    int quantity;

    public OrderProductJson() {
    }

    public long getProductId() {
        return productId;
    }

    public void setProductId(long productId) {
        this.productId = productId;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
