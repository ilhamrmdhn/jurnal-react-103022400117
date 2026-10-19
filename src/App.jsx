import "./index.css";
const gayaJudul = { fontSize: "30", color: "blue" };
const nama = "Ilham";
const n = 17;
const jam = 9;

// const menu = [
//   { nama: "Nasi ayam geprek", harga: { finalHarga }, kategori: "" },
//   { nama: "Es teh lemon", harga: 13700, kategori: "Minuman" },
//   { nama: "Mie goreng telur", harga: 12000, kategori: "" },
// ];

// var finalHarga = 10000 + (n * 100)

function App() {
  return (
    <>
      <h1 className="judul" style={gayaJudul}>
        Kantin {nama}
      </h1>
      <p>Selamat {jam < 12 ? "Pagi" : "Siang"}</p>
      <p>Saldo awal kartu kantin: Rp. {n * 1000}</p>
      <button disabled>Bayar</button>
    </>
  );
}

export default App;
