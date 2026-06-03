// Número do WhatsApp da clínica de Porto-Alegre
const WHATSAPP_POA = '5551999309339';

function enviarWhatsApp(e){
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const servico = document.getElementById('servico').value;
  const quando = document.getElementById('quando').value.trim();
  const mensagem = `Olá, sou ${nome}. Gostaria de agendar uma avaliação (Porto Alegre) para ${servico}. Melhor dia/horário: ${quando}.`;
  const url = `https://wa.me/${WHATSAPP_POA}?text=${encodeURIComponent(mensagem)}`;

  if (typeof fbq === "function") {
    fbq("track", "Lead");
  }

  window.open(url, '_blank');
  return false;
}

// Ajusta link fixo do rodapé
(function(){
  const link = document.getElementById('linkWhatsApp');
  if (link) link.href = `https://wa.me/${WHATSAPP_POA}`;
})();
