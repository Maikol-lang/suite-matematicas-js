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
 * Reto 5: Divisores exactos de un numero entero positivo
 * @param {number} numero - Entero positivo mayor o igual a 1
 * @returns {{ numero: number, divisores: number[], cantidad: number, pasos: string[] }}
 */
export function obtenerDivisoresExactos(numero) {
  if (!Number.isInteger(numero) || numero < 1) {
    throw new Error("El numero debe ser un entero positivo mayor o igual a 1.");
  }

  const divisores = [];
  const pasos = [`Buscando divisores exactos para ${numero} (residuo igual a 0):`];

  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) {
      divisores.push(i);
      pasos.push(`${numero} / ${i} = ${numero / i} (residuo 0 -> es divisor)`);
    }
  }

  return {
    numero,
    divisores,
    cantidad: divisores.length,
    pasos
  };
}
/**
 * Reto 6: Diferencia y proyeccion de edades entre dos personas
 * @param {number} edadA - Edad actual de la persona A (>= 0)
 * @param {number} edadB - Edad actual de la persona B (>= 0)
 * @param {number} aniosFuturo - Anios a proyectar (>= 0)
 * @returns {{ diferencia: number, edadAFutura: number, edadBFutura: number, pasos: string[] }}
 */
export function calcularProyeccionEdades(edadA, edadB, aniosFuturo = 0) {
  if (
    !Number.isFinite(edadA) ||
    !Number.isFinite(edadB) ||
    !Number.isFinite(aniosFuturo) ||
    edadA < 0 ||
    edadB < 0 ||
    aniosFuturo < 0
  ) {
    throw new Error("Las edades y los anios deben ser numeros mayores o iguales a 0.");
  }

  const diferencia = Math.abs(edadA - edadB);
  const edadAFutura = edadA + aniosFuturo;
  const edadBFutura = edadB + aniosFuturo;

  const pasos = [
    `Edad A actual: ${edadA}, Edad B actual: ${edadB}`,
    `Diferencia absoluta de edades: |${edadA} - ${edadB}| = ${diferencia} anios`,
    `Proyeccion en ${aniosFuturo} anios: Persona A tendra ${edadAFutura} y Persona B tendra ${edadBFutura}`
  ];

  return {
    diferencia,
    edadAFutura,
    edadBFutura,
    pasos
  };
}
/**
 * Reto 7: Proporcion directa (regla de tres sencilla)
 * Si 'a' corresponde a 'b', cuanto corresponde a 'c'
 */
export function calcularProporcionDirecta(a, b, c) {
  if (!Number.isFinite(a) || !Number.isFinite(b) || !Number.isFinite(c)) {
    throw new Error("Todos los valores deben ser numeros validos.");
  }
  if (a <= 0 || b < 0 || c < 0) {
    throw new Error("El primer valor debe ser mayor a 0 y los demas no pueden ser negativos.");
  }

  const resultado = (b * c) / a;
  const pasos = [
    `Relacion inicial: ${a} -> ${b}`,
    `Multiplicamos: ${b} * ${c} = ${b * c}`,
    `Dividimos entre ${a}: (${b * c}) / ${a} = ${resultado}`
  ];

  return { resultado, pasos };
}

/**
 * Reto 8: Promedio de una lista de numeros
 */
export function calcularPromedioSimple(numeros) {
  if (!Array.isArray(numeros) || numeros.length === 0) {
    throw new Error("Debes enviar una lista con al menos un numero.");
  }
  for (const n of numeros) {
    if (!Number.isFinite(n) || n < 0) {
      throw new Error("Todos los numeros de la lista deben ser positivos.");
    }
  }

  let suma = 0;
  for (const n of numeros) {
    suma += n;
  }
  const promedio = suma / numeros.length;
  const pasos = [
    `Numeros: [${numeros.join(", ")}]`,
    `Suma total: ${suma}`,
    `Promedio: ${suma} / ${numeros.length} = ${promedio}`
  ];

  return { suma, promedio, pasos };
}

/**
 * Reto 9: Porcentaje / descuento evitando errores de decimales
 */
export function calcularPorcentajeSeguro(valor, porcentaje) {
  if (!Number.isFinite(valor) || !Number.isFinite(porcentaje)) {
    throw new Error("Ingresa numeros validos.");
  }
  if (valor < 0 || porcentaje < 0) {
    throw new Error("El valor y el porcentaje no pueden ser negativos.");
  }

  // Trabajamos en centavos para evitar decimales raros de punto flotante
  const centavos = Math.round(valor * 100);
  const montoDescuentoCentavos = Math.round((centavos * porcentaje) / 100);
  const montoDescuento = montoDescuentoCentavos / 100;
  const precioFinal = (centavos - montoDescuentoCentavos) / 100;

  const pasos = [
    `Precio base: $${valor.toFixed(2)}`,
    `Porcentaje aplicado: ${porcentaje}%`,
    `Monto calculado: $${montoDescuento.toFixed(2)} | Resultado final: $${precioFinal.toFixed(2)}`
  ];

  return { montoDescuento, precioFinal, pasos };
}

/**
 * Reto 10: Suma de numeros pares desde 1 hasta N
 */
export function sumarParesHasta(limite) {
  if (!Number.isInteger(limite) || limite < 1) {
    throw new Error("El limite debe ser un numero entero mayor o igual a 1.");
  }

  let sumaPares = 0;
  const pares = [];
  for (let i = 2; i <= limite; i += 2) {
    pares.push(i);
    sumaPares += i;
  }

  const pasos = [
    `Limite: ${limite}`,
    `Pares encontrados: [${pares.join(", ")}]`,
    `Suma total de pares: ${sumaPares}`
  ];

  return { pares, sumaPares, pasos };
}