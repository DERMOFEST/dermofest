import {{ useState }} from "react";
import {{ supabase }} from "../services/supabase";

export default function Register() {{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("vatandas");
  const [gln, setGln] = useState("");

  const handleRegister = async (e) => {{
    e.preventDefault();

    const {{ data, error }} = await supabase.auth.signUp({{
      email,
      password
    }});

    if (error) {{
      alert("Kayıt başarısız: " + error.message);
      return;
    }}

    const user = data.user;

    if (user) {{
      const {{ error: insertError }} = await supabase
        .from("profiles")
        .insert([{{
          id: user.id,
          type,
          gln: type === "eczaci" ? gln : null
        }}]);

      if (insertError) {{
        alert("Profil oluşturulamadı: " + insertError.message);
      }} else {{
        alert("Kayıt başarılı!");
      }}
    }}
  }};

  return (
    <div style={{{{ maxWidth: "400px", margin: "0 auto" }}}}>
      <h2>Kayıt Ol</h2>
      <form onSubmit={{handleRegister}}>
        <input
          type="email"
          placeholder="E-posta"
          value={{email}}
          onChange={{(e) => setEmail(e.target.value)}}
          required
        /><br />
        <input
          type="password"
          placeholder="Şifre"
          value={{password}}
          onChange={{(e) => setPassword(e.target.value)}}
          required
        /><br />
        <select value={{type}} onChange={{(e) => setType(e.target.value)}}>
          <option value="vatandas">Vatandaş</option>
          <option value="eczaci">Eczacı</option>
        </select><br />
        {{type === "eczaci" && (
          <input
            type="text"
            placeholder="GLN Numarası"
            value={{gln}}
            onChange={{(e) => setGln(e.target.value)}}
            required
          />
        )}}<br />
        <button type="submit">Kayıt Ol</button>
      </form>
    </div>
  );
}}