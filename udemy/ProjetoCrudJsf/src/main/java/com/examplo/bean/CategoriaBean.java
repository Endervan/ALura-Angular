package com.examplo.bean;

import com.exemplo.model.Categoria;

import javax.annotation.PostConstruct;
import javax.faces.bean.ManagedBean;
import javax.faces.bean.ViewScoped;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@ManagedBean
@ViewScoped
public class CategoriaBean {
    private List<Categoria> categorias;

    @PersistenceContext
    private EntityManager em;

    @PostConstruct
    public void init() {
        categorias = em.createQuery("SELECT c FROM Categoria c", Categoria.class).getResultList();
    }

    // Getters e Setters
    public List<Categoria> getCategorias() {
        return categorias;
    }

    public void setCategorias(List<Categoria> categorias) {
        this.categorias = categorias;
    }
}