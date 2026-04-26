/**
 * @author navetacandra, dhaniwira
 * TUGAS INI DIKERJAKAN MURNI TANPA AI DAN DIKETIK MANUAL 100%
 */

const CELCIUS_INPUT = document.getElementById("celcius");
const FAHRENHEIT_INPUT = document.getElementById("fahrenheit");
const KELVIN_INPUT = document.getElementById("kelvin");
const REAMUR_INPUT = document.getElementById("reamur");
const MILIMETER_INPUT = document.getElementById("milimeter");
const CENTIMETER_INPUT = document.getElementById("centimeter");
const METER_INPUT = document.getElementById("meter");
const FEET_INPUT = document.getElementById("feet");
const KILOMETER_INPUT = document.getElementById("kilometer");
const MILILITER_INPUT = document.getElementById("mililiter");
const LITER_INPUT = document.getElementById("liter");
const BERAS_INPUT = document.getElementById("beras_kg");
const TEPUNG_INPUT = document.getElementById("tepung_kg");
const AIR_INPUT = document.getElementById("air_kg");
const SUSU_INPUT = document.getElementById("susu_kg");
const METER2_INPUT = document.getElementById("meter_2");
const HEKTAR_INPUT = document.getElementById("hektar");
const ARE_INPUT = document.getElementById("are");
const BOUW_INPUT = document.getElementById("bouw");
const JAM_INPUT = document.getElementById("jam");
const MENIT_INPUT = document.getElementById("menit");
const DETIK_INPUT = document.getElementById("detik");
const LEMAK_INPUT = document.getElementById("lemak");
const PROTEIN_INPUT = document.getElementById("protein");
const KARBOHIDRAT_INPUT = document.getElementById("karbohidrat");
const MINERAL_INPUT = document.getElementById("mineral");
const KALORI_INPUT = document.getElementById("kalori_cal");

/* Handle Hitung Suhu */
const SUHU = {
  celcius2fahrenheit: () => {
    const c = Number(CELCIUS_INPUT.value);
    FAHRENHEIT_INPUT.value = (c * 1.8 + 32).toFixed(2).toString();
  },
  fahrenheit2celcius: () => {
    const f = Number(FAHRENHEIT_INPUT.value);
    CELCIUS_INPUT.value = ((f - 32) / 1.8).toFixed(2).toString();
  },
  celcius2kelvin: () => {
    const c = Number(CELCIUS_INPUT.value);
    KELVIN_INPUT.value = (c + 273.15).toFixed(2).toString();
  },
  kelvin2celcius: () => {
    const k = Number(KELVIN_INPUT.value);
    CELCIUS_INPUT.value = (k - 273.15).toFixed(2).toString();
  },
  celcius2reamur: () => {
    const c = Number(CELCIUS_INPUT.value);
    REAMUR_INPUT.value = (c * 0.8).toFixed(2).toString();
  },
  reamur2celcius: () => {
    const r = Number(REAMUR_INPUT.value);
    CELCIUS_INPUT.value = (r / 0.8).toFixed(2).toString();
  },
};

const SUHU_CHANGE = {
  celcius: [SUHU.celcius2fahrenheit, SUHU.celcius2kelvin, SUHU.celcius2reamur],
  fahrenheit: [
    SUHU.fahrenheit2celcius,
    SUHU.celcius2kelvin,
    SUHU.celcius2reamur,
  ],
  kelvin: [SUHU.kelvin2celcius, SUHU.celcius2fahrenheit, SUHU.celcius2reamur],
  reamur: [SUHU.reamur2celcius, SUHU.celcius2fahrenheit, SUHU.celcius2kelvin],
};

CELCIUS_INPUT.oninput = () => SUHU_CHANGE.celcius.forEach((fn) => fn());
FAHRENHEIT_INPUT.oninput = () => SUHU_CHANGE.fahrenheit.forEach((fn) => fn());
KELVIN_INPUT.oninput = () => SUHU_CHANGE.kelvin.forEach((fn) => fn());
REAMUR_INPUT.oninput = () => SUHU_CHANGE.reamur.forEach((fn) => fn());
/* End Handle Hitung Suhu */

/* Handle Hitung Jarak */
const JARAK = {
  mm2cm: () => {
    CENTIMETER_INPUT.value = (Number(MILIMETER_INPUT.value) / 10)
      .toFixed(2)
      .toString();
  },
  cm2mm: () => {
    MILIMETER_INPUT.value = (Number(CENTIMETER_INPUT.value) * 10)
      .toFixed(2)
      .toString();
  },
  m2cm: () => {
    CENTIMETER_INPUT.value = (Number(METER_INPUT.value) * 100)
      .toFixed(2)
      .toString();
  },
  cm2m: () => {
    METER_INPUT.value = (Number(CENTIMETER_INPUT.value) / 100)
      .toFixed(2)
      .toString();
  },
  m2ft: () => {
    FEET_INPUT.value = (Number(METER_INPUT.value) * 0.3048)
      .toFixed(2)
      .toString();
  },
  ft2m: () => {
    METER_INPUT.value = (Number(FEET_INPUT.value) * 3.28084)
      .toFixed(2)
      .toString();
  },
  km2m: () => {
    METER_INPUT.value = (Number(KILOMETER_INPUT.value) * 1000)
      .toFixed(2)
      .toString();
  },
  m2km: () => {
    KILOMETER_INPUT.value = (Number(METER_INPUT.value) / 1000)
      .toFixed(2)
      .toString();
  },
};

const JARAK_CHANGE = {
  milimeter: [JARAK.mm2cm, JARAK.cm2m, JARAK.m2ft, JARAK.m2km],
  centimeter: [JARAK.cm2mm, JARAK.cm2m, JARAK.m2ft, JARAK.m2km],
  meter: [JARAK.m2cm, JARAK.cm2mm, JARAK.m2ft, JARAK.m2km],
  feet: [JARAK.ft2m, JARAK.m2cm, JARAK.cm2mm, JARAK.m2km],
  kilometer: [JARAK.km2m, JARAK.m2ft, JARAK.m2cm, JARAK.cm2mm],
};

MILIMETER_INPUT.oninput = () => JARAK_CHANGE.milimeter.forEach((fn) => fn());
CENTIMETER_INPUT.oninput = () => JARAK_CHANGE.centimeter.forEach((fn) => fn());
METER_INPUT.oninput = () => JARAK_CHANGE.meter.forEach((fn) => fn());
FEET_INPUT.oninput = () => JARAK_CHANGE.feet.forEach((fn) => fn());
KILOMETER_INPUT.oninput = () => JARAK_CHANGE.kilometer.forEach((fn) => fn());
/* End Handle Hitung Jarak */

/* Handle Hitung Volume */
const VOLUME = {
  ml2l: () => {
    LITER_INPUT.value = (Number(MILILITER_INPUT.value) / 1000)
      .toFixed(2)
      .toString();
  },
  l2ml: () => {
    MILILITER_INPUT.value = (Number(LITER_INPUT.value) * 1000)
      .toFixed(2)
      .toString();
  },
  l2beras: () => {
    BERAS_INPUT.value = (Number(LITER_INPUT.value) * 0.753)
      .toFixed(2)
      .toString();
  },
  beras2l: () => {
    LITER_INPUT.value = (Number(BERAS_INPUT.value) / 0.753)
      .toFixed(2)
      .toString();
  },
  l2tepung: () => {
    TEPUNG_INPUT.value = (Number(LITER_INPUT.value) * 0.59)
      .toFixed(2)
      .toString();
  },
  tepung2l: () => {
    LITER_INPUT.value = (Number(TEPUNG_INPUT.value) / 0.59)
      .toFixed(2)
      .toString();
  },
  l2air: () => {
    AIR_INPUT.value = LITER_INPUT.value;
  },
  air2l: () => {
    AIR_INPUT.value = LITER_INPUT.value;
  },
  l2susu: () => {
    SUSU_INPUT.value = (Number(LITER_INPUT.value) * 1.03).toFixed(2).toString();
  },
  susu2l: () => {
    LITER_INPUT.value = (Number(SUSU_INPUT.value) / 1.03).toFixed(2).toString();
  },
};

const VOLUME_CHANGE = {
  mililiter: [
    VOLUME.ml2l,
    VOLUME.l2beras,
    VOLUME.l2tepung,
    VOLUME.l2air,
    VOLUME.l2susu,
  ],
  liter: [
    VOLUME.l2ml,
    VOLUME.l2beras,
    VOLUME.l2tepung,
    VOLUME.l2air,
    VOLUME.l2susu,
  ],
  beras: [
    VOLUME.beras2l,
    VOLUME.l2ml,
    VOLUME.l2tepung,
    VOLUME.l2air,
    VOLUME.l2susu,
  ],
  tepung: [
    VOLUME.tepung2l,
    VOLUME.l2ml,
    VOLUME.l2beras,
    VOLUME.l2air,
    VOLUME.l2susu,
  ],
  air: [
    VOLUME.air2l,
    VOLUME.l2ml,
    VOLUME.l2beras,
    VOLUME.l2tepung,
    VOLUME.l2susu,
  ],
  susu: [
    VOLUME.susu2l,
    VOLUME.l2ml,
    VOLUME.l2beras,
    VOLUME.l2tepung,
    VOLUME.l2air,
  ],
};

MILILITER_INPUT.oninput = () => VOLUME_CHANGE.mililiter.forEach((fn) => fn());
LITER_INPUT.oninput = () => VOLUME_CHANGE.liter.forEach((fn) => fn());
BERAS_INPUT.oninput = () => VOLUME_CHANGE.beras.forEach((fn) => fn());
TEPUNG_INPUT.oninput = () => VOLUME_CHANGE.tepung.forEach((fn) => fn());
AIR_INPUT.oninput = () => VOLUME_CHANGE.air.forEach((fn) => fn());
SUSU_INPUT.oninput = () => VOLUME_CHANGE.susu.forEach((fn) => fn());
/* End Handle Hitung Volume */

/* Handle Hitung Luas */
const LUAS = {
  m2a: () => {
    ARE_INPUT.value = (Number(METER2_INPUT.value) / 100).toFixed(2).toString();
  },
  a2m: () => {
    METER2_INPUT.value = (Number(ARE_INPUT.value) * 100).toFixed(2).toString();
  },
  a2ha: () => {
    HEKTAR_INPUT.value = (Number(ARE_INPUT.value) / 100).toFixed(2).toString();
  },
  ha2a: () => {
    ARE_INPUT.value = (Number(HEKTAR_INPUT.value) * 100).toFixed(2).toString();
  },
  m2bw: () => {
    BOUW_INPUT.value = (Number(METER2_INPUT.value) / (14.0625 * 500))
      .toFixed(2)
      .toString();
  },
  bw2m: () => {
    METER2_INPUT.value = (Number(BOUW_INPUT.value) * (14.0625 * 500))
      .toFixed(2)
      .toString();
  },
};

const LUAS_CHANGE = {
  meter: [LUAS.m2a, LUAS.a2ha, LUAS.m2bw],
  are: [LUAS.a2m, LUAS.a2ha, LUAS.m2bw],
  hektar: [LUAS.ha2a, LUAS.a2m, LUAS.m2bw],
  bouw: [LUAS.bw2m, LUAS.m2a, LUAS.a2ha],
};

METER2_INPUT.oninput = () => LUAS_CHANGE.meter.forEach((fn) => fn());
ARE_INPUT.oninput = () => LUAS_CHANGE.are.forEach((fn) => fn());
HEKTAR_INPUT.oninput = () => LUAS_CHANGE.hektar.forEach((fn) => fn());
BOUW_INPUT.oninput = () => LUAS_CHANGE.bouw.forEach((fn) => fn());
/* End Handle Hitung Luas */

/* Handle Hitung Waktu */
const WAKTU = {
  d2m: () => {
    MENIT_INPUT.value = (Number(DETIK_INPUT.value) / 60).toFixed(2).toString();
  },
  m2d: () => {
    DETIK_INPUT.value = (Number(MENIT_INPUT.value) * 60).toFixed(2).toString();
  },
  m2j: () => {
    JAM_INPUT.value = (Number(MENIT_INPUT.value) / 60).toFixed(2).toString();
  },
  j2m: () => {
    MENIT_INPUT.value = (Number(JAM_INPUT.value) * 60).toFixed(2).toString();
  },
};

const WAKTU_CHANGE = {
  detik: [WAKTU.d2m, WAKTU.m2j],
  menit: [WAKTU.m2d, WAKTU.m2j],
  jam: [WAKTU.j2m, WAKTU.m2d],
};

DETIK_INPUT.oninput = () => WAKTU_CHANGE.detik.forEach((fn) => fn());
MENIT_INPUT.oninput = () => WAKTU_CHANGE.menit.forEach((fn) => fn());
JAM_INPUT.oninput = () => WAKTU_CHANGE.jam.forEach((fn) => fn());
/* End Handle Hitung Waktu */

/* Handle Hitung Kalori */
const KALORI = {
  lemak2cal: () => {
    KALORI_INPUT.value = (Number(LEMAK_INPUT.value) * 9).toFixed(2).toString();
  },
  cal2lemak: () => {
    LEMAK_INPUT.value = (Number(KALORI_INPUT.value) / 9).toFixed(2).toString();
  },
  karbo2cal: () => {
    KALORI_INPUT.value = (Number(KARBOHIDRAT_INPUT.value) * 4)
      .toFixed(2)
      .toString();
  },
  cal2karbo: () => {
    KARBOHIDRAT_INPUT.value = (Number(KALORI_INPUT.value) / 4)
      .toFixed(2)
      .toString();
  },
  protein2cal: () => {
    KALORI_INPUT.value = (Number(PROTEIN_INPUT.value) * 4)
      .toFixed(2)
      .toString();
  },
  cal2protein: () => {
    PROTEIN_INPUT.value = (Number(KALORI_INPUT.value) / 4)
      .toFixed(2)
      .toString();
  },
  mineral2cal: () => {
    KALORI_INPUT.value = (Number(MINERAL_INPUT.value) * 0).toString();
  },
  cal2mineral: () => {
    MINERAL_INPUT.value = (Number(KALORI_INPUT.value) * 0).toString();
  },
};

const KALORI_CHANGE = {
  kalori: [
    KALORI.cal2lemak,
    KALORI.cal2protein,
    KALORI.cal2karbo,
    KALORI.cal2mineral,
  ],
  lemak: [
    KALORI.lemak2cal,
    KALORI.cal2protein,
    KALORI.cal2karbo,
    KALORI.cal2mineral,
  ],
  protein: [
    KALORI.protein2cal,
    KALORI.cal2lemak,
    KALORI.cal2karbo,
    KALORI.cal2mineral,
  ],
  karbo: [
    KALORI.karbo2cal,
    KALORI.cal2lemak,
    KALORI.cal2protein,
    KALORI.cal2mineral,
  ],
  mineral: [
    KALORI.mineral2cal,
    KALORI.cal2lemak,
    KALORI.cal2protein,
    KALORI.cal2karbo,
  ],
};

LEMAK_INPUT.oninput = () => KALORI_CHANGE.lemak.forEach((fn) => fn());
PROTEIN_INPUT.oninput = () => KALORI_CHANGE.protein.forEach((fn) => fn());
KARBOHIDRAT_INPUT.oninput = () => KALORI_CHANGE.karbo.forEach((fn) => fn());
MINERAL_INPUT.oninput = () => KALORI_CHANGE.mineral.forEach((fn) => fn());
KALORI_INPUT.oninput = () => KALORI_CHANGE.kalori.forEach((fn) => fn());
/* End Handle Hitung Kalori */
