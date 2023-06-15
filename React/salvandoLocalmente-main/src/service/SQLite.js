import * as SQLite from 'expo-sqlite';

function abreConexao() {
    return SQLite.openDatabase("db.db");
}

export const db = abreConexao();
