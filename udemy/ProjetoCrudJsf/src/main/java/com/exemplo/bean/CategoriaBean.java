package com.exemplo.bean;

import com.exemplo.model.Categoria;

import jakarta.annotation.PostConstruct;
import jakarta.faces.view.ViewScoped;
import jakarta.inject.Named;
import jakarta.persistence.EntityManager;
import jakarta.persistence.PersistenceContext;
import java.util.List;

@Named
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