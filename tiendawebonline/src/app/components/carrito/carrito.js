class Carrito{
    comprarproducto(e){
        e.preventDefault();
        if(e.target.classlist.contains('agregar-carrito')){
            const producto = e.target.parentElement.parentElement;
            this.leerDatosProducto(producto);
        }
    }
}