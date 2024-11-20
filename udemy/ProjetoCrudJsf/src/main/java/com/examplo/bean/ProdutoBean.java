package com.examplo.bean;

import com.exemplo.model.Produto;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.transaction.Transactional;
import java.util.List;

@ManagedBean
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