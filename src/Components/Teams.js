// Utility to generate a 6-character code (can also be handled by backend)
function generateCode() {
    return Math.random().toString(36).substr(2, 6).toUpperCase();
  }
  
  // Fetch and display teams
  async function displayTeams() {
    const res = await fetch('/api/teams');
    const teams = await res.json();
  
    const teamsList = document.getElementById("teamsList");
    teamsList.innerHTML = "";
  
    if (teams.length === 0) {
      teamsList.innerHTML = "<p>No teams created yet.</p>";
      return;
    }
  
    teams.forEach(team => {
      const div = document.createElement("div");
      div.className = "team-card";
      div.innerHTML = `<strong>${team.name}</strong><br>${team.description}<br><small>Code: ${team.code}</small>`;
      teamsList.appendChild(div);
    });
  }
  
  function showJoinTeam() {
    document.getElementById("joinTeamSection").classList.remove("hidden");
    document.getElementById("createTeamSection").classList.add("hidden");
  }
  
  function showCreateTeam() {
    document.getElementById("createTeamSection").classList.remove("hidden");
    document.getElementById("joinTeamSection").classList.add("hidden");
  }
  
  // POST new team to backend
  async function createTeam() {
    const name = document.getElementById("teamName").value.trim();
    const description = document.getElementById("teamDesc").value.trim();
    const code = generateCode();
  
    const res = await fetch('/api/teams', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, description, code })
    });
  
    const result = await res.json();
    if (res.ok) {
      alert("Team created! Share this code: " + result.code);
      displayTeams();
      showJoinTeam();
    } else {
      alert("Error: " + result.error);
    }
  }
  
  // POST join team
  async function joinTeam() {
    const code = document.getElementById("joinCode").value.trim().toUpperCase();
  
    const res = await fetch(`/api/teams/join/${code}`, {
      method: 'POST'
    });
  
    const result = await res.json();
    if (res.ok) {
      alert("Joined team: " + result.name);
    } else {
      alert("Error: " + result.error);
    }
  }
  
  window.onload = displayTeams;
  