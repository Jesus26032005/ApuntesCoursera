const users = [
  { id: 101, name: " Ada ", scores: [10, 20, 30] },
  { id: 102, name: "", scores: [5, 0, 15] },
  { id: 103, name: null, scores: [7, 14] },
  { id: 104, /* name omitted on purpose */ scores: [3, 3, 3, 3] },
  { id: 105, name: "Grace", scores: [] }
];

function normalizeName(value) {
  if (value === null || value === undefined) return "Unknown";
  if (typeof value !== "string") return "Unknown";
  const trimmed = value.trim();
  return trimmed === "" ? "Unknown" : trimmed;
}

function averageScore(scores) {
  if (!Array.isArray(scores)) {
    throw new Error("scores must be an array");
  }
  if (scores.length === 0) return null;
  let sum = 0;
  for (const s of scores) sum += s;
  return Math.round((sum / scores.length) * 100) / 100;
}

function buildUserSummary(user) {
  if (typeof user !== "object" || user === null) {
    throw new Error("user must be an object");
  }
  const scores = Array.isArray(user["scores"]) ? user["scores"] : []; // notación de corchete
  return {
    id: user.id,                       // notación de punto
    name: normalizeName(user.name),
    scoreCount: scores.length,
    avg: averageScore(scores)          // [] -> null
  };
}

function summarizeUsers(userArray) {
  if (!Array.isArray(userArray)) {
    throw new Error("userArray must be an array");
  }
  return userArray.map(buildUserSummary);
}

function safeSummarizeUsers(userArray) {
  try {
    return { ok: true, data: summarizeUsers(userArray) };
  } catch (error) {
    return { ok: false, error: error.message };
  }
}

function getUserDisplayNameById(userArray, id) {
  if (!Array.isArray(userArray)) {
    throw new Error("userArray must be an array");
  }
  if (typeof id !== "number") {
    throw new Error("id must be a number");
  }
  const found = userArray.find(u => u.id === id);
  if (!found) {
    throw new Error("user not found");
  }
  return normalizeName(found.name);
}

/*
Part C answers:
1) typeof undefined = "undefined"
2) typeof null = "object" (bug histórico de JavaScript mantenido por compatibilidad)
3) null/undefined significan ausencia de valor; "" es un valor de texto presente
   pero vacío. Conceptualmente son distintos, pero para normalizar un nombre
   los tres son datos inválidos, así que todos devuelven "Unknown".
*/

console.log(normalizeName(" Ada "));   // "Ada"
console.log(normalizeName(" "));       // "Unknown"
console.log(normalizeName(null));      // "Unknown"
console.log(averageScore([10, 20, 30])); // 20
console.log(averageScore([]));         // null
console.log(buildUserSummary(users[0])); // { id: 101, name: "Ada", scoreCount: 3, avg: 20 }
console.log(buildUserSummary(users[3])); // { id: 104, name: "Unknown", scoreCount: 4, avg: 3 }
console.log(safeSummarizeUsers(users).ok); // true
console.log(getUserDisplayNameById(users, 105)); // "Grace"
console.log(safeSummarizeUsers("not an array")); // { ok: false, error: "userArray must be an array" }