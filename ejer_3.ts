class Cuentacorriente {
    private fondos: number;
  
    constructor() {
      this.fondos = 0;
    }
  
    retribuirFondos(monto: number): void {
      if (monto > 500000) {
        this.dispararAlarma("Asignación de fondos superior a 500000");
      } else {
        this.fondos += monto;
      }
    }
  
    extraerFondos(monto: number): void {
      if (monto > this.fondos) {
        this.dispararAlarma("Intento de sacar más fondos de los disponibles");
      } else if (monto > 100000) {
        this.dispararAlarma("Intento de sacar más de 100000");
      } else {
        this.fondos -= monto;
      }
    }
  
    adquirirSaldo(): number {
      return this.fondos;
    }
  
    private dispararAlarma(mensaje: string): void {
      console.log("ALARMA:", mensaje);
    }
  }
  
  
  const cuenta = new Cuentacorriente();
  console.log(cuenta.adquirirSaldo()); // Salida: 0
  
  cuenta.retribuirFondos(200000);
  console.log(cuenta.adquirirSaldo()); // Salida: 200000
  
  cuenta.retribuirFondos(600000); // Salida: ALARMA: Asignación de fondos superior a 500000
  console.log(cuenta.adquirirSaldo()); // Salida: 200000
  
  cuenta.extraerFondos(50000);
  console.log(cuenta.adquirirSaldo()); // Salida: 150000
  
  cuenta.extraerFondos(200000); // Salida: ALARMA: Intento de sacar más de 100000
  console.log(cuenta.adquirirSaldo()); // Salida: 150000
  
  cuenta.extraerFondos(200000); // Salida: ALARMA: Intento de sacar más fondos de los disponibles
  console.log(cuenta.adquirirSaldo()); // Salida: 150000