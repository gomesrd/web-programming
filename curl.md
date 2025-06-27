## 🧠 **Comandos `curl` para testar requisiçoes:**

### 🔹 **1️⃣ Listar pacientes (GET)**

```bash
curl -X GET http://localhost:3000/patients
```

---

### 🔸 **2️⃣ Cadastrar um paciente (POST)**

```bash
curl -X POST http://localhost:3000/patients \
-H "Content-Type: application/json" \
-d '{
  "code": "001",
  "name": "Douglas Santos"
}'
```

```bash
curl -X POST http://localhost:3000/patients \
-H "Content-Type: application/json" \
-d '{
"code": "001",
"name": "Robson Gomes"
}'
```

---

### 🔸 **3️⃣ Atualizar um paciente (PUT)**

Supondo que o ID do paciente seja `2`:

```bash
curl -X PUT http://localhost:3000/patients/2 \
-H "Content-Type: application/json" \
-d '{
  "code": "002",
  "name": "Robson Gomes"
}'
```

---
