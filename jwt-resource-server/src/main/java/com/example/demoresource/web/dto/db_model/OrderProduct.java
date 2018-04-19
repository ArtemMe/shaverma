package com.example.demoresource.web.dto.db_model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "ORDER_PRODUCTS")
public class OrderProduct {
    @Id
    @Column(name="order_product_id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    long id;

    @ManyToOne
    @JoinColumn(name="product_id")
    Product product;

    @NotNull
    int quantity;

    @ManyToMany(fetch = FetchType.LAZY,
            cascade = {//для каскадного сохранения элементов на стековерфлоу -> 2302802
                    CascadeType.PERSIST,
                    CascadeType.MERGE
            },
            mappedBy = "orderProducts")
    Set<Order> orders = new HashSet<>();

    public OrderProduct() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Set<Order> getOrders() {
        return orders;
    }

    public void setOrders(Set<Order> orders) {
        this.orders = orders;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }
}
