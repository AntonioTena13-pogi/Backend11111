import pool from '../config/db.js';


export const fetchallBooks = async () => {
    const [roes] = await pool.query("SELECT * FROMtblbook");
    
    return rows;
};