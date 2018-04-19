package com.example.demoresource.web.dto.db_model;

import javax.persistence.*;
import javax.validation.constraints.NotNull;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "ORDERS")
public class Order {

    @Id
    @GeneratedValue(strategy =  GenerationType.AUTO)
    @Column(name="order_id")
    private long id;

    //TODO сделать customer_id
    //long customerId;

    @NotNull
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name = "create_date")
    private Date createDate = new Date();//сразу инициализируем

    @ManyToMany(fetch = FetchType.LAZY,
                cascade = {
                    CascadeType.PERSIST,
                    CascadeType.MERGE
                })
    @JoinTable(name = "orders_products",
            joinColumns = { @JoinColumn(name = "order_id") },
            inverseJoinColumns = { @JoinColumn(name = "order_product_id") })
    private Set<OrderProduct> orderProducts = new HashSet<>();

    public Set<OrderProduct> getOrderProducts() {
        return orderProducts;
    }

    public void setOrderProducts(Set<OrderProduct> orderProducts) {
        this.orderProducts = orderProducts;
    }

    public Order() {

    }

    public long getId() {
        return id;
    }

    public void setId(long orderId) {
        this.id = id;
    }

}
