const formatarEstado = (estado) => {
    return estado.toLowerCase().replace(/\s+/g, ' ');
};

module.exports = formatarEstado;