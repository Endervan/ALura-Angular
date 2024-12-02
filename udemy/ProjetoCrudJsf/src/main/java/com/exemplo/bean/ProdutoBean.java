package com.exemplo.bean;

import com.exemplo.model.Produto;

import jakarta.annotation.PostConstruct;
import jakarta.faces.view.ViewScoped;
import jakarta.inject.Named;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import jakarta.transaction.Transactional;
import java.util.List;

@Named
@ViewScoped
public class ProdutoBean {
    private Produto produto = new Produto();
    private List<Produto> produtos;

    @PersistenceContext
    private EntityManager em;

    @PostConstruct
    public void init() {
        produtos = em.createQuery("SELECT p FROM Produto p", Produto.class).getResultList();
    }

    @Transactional
    public void salvar() {
        em.persist(produto);
        produtos.add(produto);
        produto = new Produto();
    }

    @Transactional
    public void remover(Produto produto) {
        em.remove(em.merge(produto));
        produtos.remove(produto);
    }

    // Getters e Setters
    public Produto getProduto() {
        return produto;
    }

    public void setProduto(Produto produto) {
        this.produto = produto;
    }

    public List<Produto> getProdutos() {
        return produtos;
    }

    public void setProdutos(List<Produto> produtos) {
        this.produtos = produtos;
    }
}