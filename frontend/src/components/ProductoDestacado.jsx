import React from 'react';

const ProductoDestacado = ({ nombre, imagen, descripcion, enlace }) => {
  return (
    <div style={styles.card}>
      <img src={imagen} alt={nombre} style={styles.imagen} />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <a href={enlace} target="_blank" rel="noopener noreferrer" style={styles.boton}>
        Ver en Amazon
      </a>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ccc',
    borderRadius: '12px',
    padding: '16px',
    maxWidth: '320px',
    textAlign: 'center',
    boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
    margin: '20px auto',
    fontFamily: 'Arial',
  },
  imagen: {
    width: '100%',
    borderRadius: '8px',
    marginBottom: '12px',
  },
  boton: {
    display: 'inline-block',
    marginTop: '10px',
    padding: '10px 16px',
    backgroundColor: '#0f9aa9',
    color: '#fff',
    textDecoration: 'none',
    borderRadius: '6px',
  },
};

export default ProductoDestacado;
