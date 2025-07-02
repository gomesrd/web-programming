## 🧠 **Comandos `curl` para testar requisiçoes:**

### 🔹 **1️⃣ Listar pacientes (GET)**

```bash
curl -X GET http://localhost:3000/api/v1/patients
```

---

### 🔹 **1️⃣ Buscar paciente por id (GET)**

```bash
curl -X GET http://localhost:3000/api/v1/patients/1
```

---

### 🔸 **2️⃣ Cadastrar um paciente (POST)**

```bash
curl -X POST http://localhost:3000/api/v1/patients \
-H "Content-Type: application/json" \
-d '{
  "code": "001",
  "name": "Douglas Santos"
}'
```

```bash
curl -X POST http://localhost:3000/api/v1/patients \
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
curl -X PATCH http://localhost:3000/api/v1/patients/2 \
-H "Content-Type: application/json" \
-d '{
  "code": "002",
  "name": "Robson Gomes"
}'
```

---
