export default function Login() {
  return (
    <div>
      <h2>Giriş Yap</h2>
      <form>
        <input type="email" placeholder="E-posta" required />
        <input type="password" placeholder="Şifre" required />
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
}