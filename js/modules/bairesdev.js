/**
 * Modulo A: Retos Logicos BairesDev
 * Funciones para simulacion de problemas de combinatoria, divisibilidad y logistica.
 */

/**
 * Reto 1: Probabilidad de suma de 2 dados
 * @param {number} sumaObjetivo - Suma a evaluar (2 a 12)
 * @returns {{ casosFavorables: number, casosTotales: number, probabilidad: number, porcentaje: string }}
 */
export function calcularProbabilidadDados(sumaObjetivo) {
  if (sumaObjetivo < 2 || sumaObjetivo > 12) {
    throw new Error("La suma objetivo en dos dados debe estar entre 2 y 12.");
  }

  let casosFavorables = 0;
  const casosTotales = 36; // 6 * 6

  for (let d1 = 1; d1 <= 6; d1++) {
    for (let d2 = 1; d2 <= 6; d2++) {
      if (d1 + d2 === sumaObjetivo) {
        casosFavorables++;
      }
    }
  }

  const probabilidad = casosFavorables / casosTotales;
  const porcentaje = (probabilidad * 100).toFixed(2) + "%";

  return {
    casosFavorables,
    casosTotales,
    probabilidad,
    porcentaje
  };
}

/**
 * Reto 2: Total de partidos de un torneo round-robin
 * Formula: C(n, 2) = n * (n - 1) / 2
 * @param {number} n - Cantidad de equipos (n >= 2)
 * @returns {number}
 */
export function calcularPartidosTorneo(n) {
  if (n < 2) {
    throw new Error("Se requieren al menos 2 equipos para jugar un torneo.");
  }
  return (n * (n - 1)) / 2;
}

/**
 * Reto 3: Multiplos estrictamente menores a un limite en tiempo O(1)
 * @param {number} limite - Limite superior (ej: 904)
 * @param {number} divisor - Divisor entero positivo (ej: 3)
 * @returns {number}
 */
export function contarMultiplosMenores(limite, divisor) {
  if (limite <= 1 || divisor <= 0) return 0;
  // Menores estrictos: [1, limite - 1]
  return Math.floor((limite - 1) / divisor);
}

/**
 * Reto 4: Minimo de viajes segun capacidad (Funcion Techo / Ceil)
 * @param {number} totalItems - Cantidad total de elementos a trasladar
 * @param {number} capacidadPorViaje - Capacidad maxima por viaje
 * @returns {number}
 */
export function calcularViajesMinimos(totalItems, capacidadPorViaje) {
  if (totalItems <= 0) return 0;
  if (capacidadPorViaje <= 0) {
    throw new Error("La capacidad por viaje debe ser mayor a 0.");
  }
  return Math.ceil(totalItems / capacidadPorViaje);
}

/**
 * Reto 5 (Taller Reto 5): Problema de Edades Relativas
 * Pablo tiene edadPablo anios y es k veces la edad de su hermana.
 * Calcula la edad de Pablo cuando sea razonFutura veces la edad de su hermana.
 */
export function edadFuturaPablo(edadPablo, k, razonFutura = 2) {
  if (!Number.isFinite(edadPablo) || !Number.isFinite(k) || !Number.isFinite(razonFutura)) {
    throw new Error("Todos los valores deben ser numeros validos.");
  }
  if (edadPablo <= 0 || k <= 0 || razonFutura <= 1) {
    throw new Error("La edad y k deben ser mayores a 0, y la razon futura mayor a 1.");
  }

  const edadHermana = edadPablo / k;
  const t = (edadPablo - razonFutura * edadHermana) / (razonFutura - 1);
  const edadFutura = Math.trunc(edadPablo + t);

  const pasos = [
    `Edad actual de Pablo: ${edadPablo}, k = ${k} -> Hermana actual: ${edadHermana}`,
    `Tiempo transcurrido t: (${edadPablo} - ${razonFutura} * ${edadHermana}) / (${razonFutura} - 1) = ${t}`,
    `Edad futura de Pablo cuando la razon sea ${razonFutura}: ${edadFutura}`
  ];

  return {
    edadHermana,
    t,
    edadFutura,
    pasos
  };
}

/**
 * Reto 6 (Taller Reto 6): Masa de Recipiente y Contenido Parcial
 * Resuelve V + C = pesoLleno y V + fraccion * C = pesoParcial
 */
export function pesoRecipienteVacio(pesoLleno, pesoParcial, fraccion = 0.5) {
  if (!Number.isFinite(pesoLleno) || !Number.isFinite(pesoParcial) || !Number.isFinite(fraccion)) {
    throw new Error("Todos los valores deben ser numeros validos.");
  }
  if (fraccion <= 0 || fraccion >= 1) {
    throw new Error("La fraccion debe estar entre 0 y 1 (sin incluir los extremos).");
  }

  const pesoContenido = (pesoLleno - pesoParcial) / (1 - fraccion);
  const pesoVacio = Number((pesoLleno - pesoContenido).toFixed(2));

  const pasos = [
    `Peso lleno: ${pesoLleno}, Peso parcial: ${pesoParcial}, Fraccion: ${fraccion}`,
    `Contenido total: (${pesoLleno} - ${pesoParcial}) / (1 - ${fraccion}) = ${pesoContenido}`,
    `Peso del recipiente vacio: ${pesoLleno} - ${pesoContenido} = ${pesoVacio}`
  ];

  return {
    pesoContenido,
    pesoVacio,
    pasos
  };
}

/**
 * Reto 7 (Taller Reto 7): Diferencial de Ingreso por Elasticidad
 * Calcula la diferencia neta de ingresos (I2 - I1) en dolares (1 dolar = 100 centavos)
 */
export function diferenciaIngresoDolares(q1, p1Cent, q2, p2Cent) {
  if (
    !Number.isFinite(q1) ||
    !Number.isFinite(p1Cent) ||
    !Number.isFinite(q2) ||
    !Number.isFinite(p2Cent)
  ) {
    throw new Error("Todos los valores deben ser numeros validos.");
  }
  if (q1 < 0 || p1Cent < 0 || q2 < 0 || p2Cent < 0) {
    throw new Error("Las cantidades y precios no pueden ser negativos.");
  }

  const i1Cent = q1 * p1Cent;
  const i2Cent = q2 * p2Cent;
  const diferenciaDolares = Number(((i2Cent - i1Cent) / 100).toFixed(2));

  const pasos = [
    `Ingreso inicial (I1): ${q1} * ${p1Cent} centavos = ${i1Cent} centavos`,
    `Ingreso nuevo (I2): ${q2} * ${p2Cent} centavos = ${i2Cent} centavos`,
    `Diferencia en dolares: (${i2Cent} - ${i1Cent}) / 100 = $${diferenciaDolares}`
  ];

  return {
    i1Cent,
    i2Cent,
    diferenciaDolares,
    pasos
  };
}

/**
 * Reto 8 (Taller Reto 10): Calculo de Porcentaje de Aumento
 * Calcula ((v2 - v1) / v1) * 100 redondeado a 2 decimales
 */
export function porcentajeAumento(v1, v2) {
  if (!Number.isFinite(v1) || !Number.isFinite(v2)) {
    throw new Error("Ingresa valores numericos validos.");
  }
  if (v1 <= 0) {
    throw new Error("El valor inicial debe ser mayor a 0.");
  }

  const incremento = ((v2 - v1) / v1) * 100;
  const porcentaje = Number(incremento.toFixed(2));

  const pasos = [
    `Valor inicial (v1): ${v1}, Valor actual (v2): ${v2}`,
    `Variacion: ${v2} - ${v1} = ${v2 - v1}`,
    `Porcentaje de aumento: ((${v2} - ${v1}) / ${v1}) * 100 = ${porcentaje}%`
  ];

  return {
    variacion: v2 - v1,
    porcentaje,
    pasos
  };
}

/**
 * Reto 9 (Taller Reto 11): Analisis Financiero: Cuotas vs Contado
 * Calcula el ahorro al pagar al contado frente a financiar en cuotas
 */
export function ahorroAlContado(nCuotas, montoCuota, precioContado) {
  if (!Number.isFinite(nCuotas) || !Number.isFinite(montoCuota) || !Number.isFinite(precioContado)) {
    throw new Error("Todos los valores deben ser numeros validos.");
  }
  if (!Number.isInteger(nCuotas) || nCuotas <= 0 || montoCuota < 0 || precioContado < 0) {
    throw new Error("El numero de cuotas debe ser un entero positivo y los montos no negativos.");
  }

  const totalFinanciado = nCuotas * montoCuota;
  const ahorro = Number((totalFinanciado - precioContado).toFixed(2));

  const pasos = [
    `Total financiado: ${nCuotas} cuotas * ${montoCuota} = ${totalFinanciado}`,
    `Precio al contado: ${precioContado}`,
    `Ahorro al contado: ${totalFinanciado} - ${precioContado} = ${ahorro}`
  ];

  return {
    totalFinanciado,
    ahorro,
    pasos
  };
}

/**
 * Reto 10 (Taller Reto 12): Deteccion de Elemento Intruso por Patron
 * Encuentra el primer numero de la lista que NO es divisible entre el divisor indicado
 */
export function elementoIntrusoDivisor(numeros, divisor) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error("Debes enviar una lista con al menos un numero.");
  }
  if (!Number.isFinite(divisor) || divisor === 0) {
    throw new Error("El divisor debe ser un numero distinto de 0.");
  }

  for (const num of numeros) {
    if (!Number.isFinite(num)) {
      throw new Error("Todos los elementos de la lista deben ser numeros validos.");
    }
    if (num % divisor !== 0) {
      return {
        intruso: num,
        divisor,
        pasos: [
          `Lista evaluada: [${numeros.join(", ")}] con divisor ${divisor}`,
          `El numero ${num} tiene residuo ${num % divisor} !== 0 -> es el intruso`
        ]
      };
    }
  }

  return {
    intruso: null,
    divisor,
    pasos: [
      `Lista evaluada: [${numeros.join(", ")}] con divisor ${divisor}`,
      "Todos los numeros cumplen con la divisibilidad"
    ]
  };
}

/**
 * Reto extra (Taller Reto 15): Reconstruccion de Dato Faltante por Promedio
 * Calcula el numero faltante dado el promedio esperado, total de elementos y conocidos
 */
export function numeroFaltantePromedio(promedio, totalElementos, conocidos) {
  if (!Number.isFinite(promedio) || !Number.isInteger(totalElementos) || totalElementos < 1) {
    throw new Error("Ingresa un promedio valido y un total de elementos entero mayor o igual a 1.");
  }
  if (!Array.isArray(conocidos) || conocidos.length >= totalElementos) {
    throw new Error("La cantidad de numeros conocidos debe ser menor que el total de elementos.");
  }

  let sumaConocidos = 0;
  for (const n of conocidos) {
    if (!Number.isFinite(n)) {
      throw new Error("Todos los numeros conocidos deben ser validos.");
    }
    sumaConocidos += n;
  }

  const sumaRequerida = promedio * totalElementos;
  const faltante = Number((sumaRequerida - sumaConocidos).toFixed(4));

  const pasos = [
    `Suma total requerida: ${promedio} * ${totalElementos} = ${sumaRequerida}`,
    `Suma de conocidos [${conocidos.join(", ")}]: ${sumaConocidos}`,
    `Numero faltante: ${sumaRequerida} - ${sumaConocidos} = ${faltante}`
  ];

  return {
    sumaRequerida,
    sumaConocidos,
    faltante,
    pasos
  };
}