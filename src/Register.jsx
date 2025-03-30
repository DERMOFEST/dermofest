export default function Register() {
  return (
    <div>
      <h2>Kayıt Ol</h2>
      <form>
        <input type="text" placeholder="Ad Soyad" required />
        <input type="email" placeholder="E-posta" required />
        <input type="password" placeholder="Şifre" required />
        <input type="text" placeholder="GLN (eczacıysanız)" />
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
}