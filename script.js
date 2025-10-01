<script>
  document.querySelectorAll(".toggle-btn").forEach((btn, index) => {
    btn.addEventListener("click", () => {
      const detailRow = document.querySelectorAll(".details-row")[index];
      if (detailRow.style.display === "table-row") {
        detailRow.style.display = "none";
        btn.textContent = "+";
      } else {
        detailRow.style.display = "table-row";
        btn.textContent = "−"; // change + to minus when opened
      }
    });
  });
</script>
