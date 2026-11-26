
function openInvitation() {
    document.querySelector(".hero").innerHTML = `
        <section class="invitation-page">

            <p class="subtitle">THE CELEBRATION OF</p>
            <h1>Risti's Birthday</h1>
            <div class="flower">🌼🎀🌼</div>

            <p class="date">27 MARCH</p>
           <p class="year">A special day with special people</>
           <div class="memory-section">
    <h2>A Litte Memory of me🎀</h2>
    <p>From little memories to today 💛</p>

    <div class="memory-gallery">
        <img src="WhatsApp Image 2026-11-26 at 09.39.29.jpeg" alt="Foto masa kecil Risti">

        <img src="WhatsApp Image 2026-11-26 at 09.39.29 (1).jpeg" alt="Foto Risti sekarang">
    </div>
</div>
            <button class="music-button" onclick="toggleMusic()">
    🎵 Putar Musik
</button>

<audio id="backgroundMusic" loop>
    <source src="assets/backsound.mp3" type="audio/mpeg">
</audio>

<div class="letter-decoration">
    🌼 🎀 🌼
</div>

<div class="letter-icon">💌</div>
    <h2>Sebuah catatan kecil untukmu</h2>

    <p>Dear My Favorite People,</p>

    <p>
        Terima kasih sudah menjadi bagian dari cerita dan perjalanan hidupku.
        Aku sangat bersyukur bisa berbagi hari spesial ini bersama kalian.
    </p>

    <p>
        Kehadiran kalian akan menjadi salah satu hadiah terindah
        di hari ulang tahunku.
    </p>

    <p>See you on my special day! 💛</p>

    <p class="letter-sign">With love,<br>Risti 🎀</p>
</div>
            <div class="detail-box">
                <h2>Catatan dan tanggalnya</h2>
                <p>📅 27 Maret</p>
                <p>⏰ Waktu menyusul</p>
                <p>📍 Kopi Solusinya Pamulang</p>
            </div>

            <div class="detail-box">
                <h2>Location</h2>
                <p>Kopi Solusinya Pamulang</p>
                <iframe
                    src="https://www.google.com/maps?q=Kopi+Solusinya+Pamulang&output=embed"
                    width="100%"
                    height="220"
                    style="border:0; border-radius:15px;"
                    loading="lazy">
                </iframe>
            </div>

            <div class="detail-box">
                <h2>Jadwal acara</h2>
                <p>16.00— Misi selamat datang</p>
                <p>20.00— Perayaaan ulang tahun</p>
                <p>20.00 — Pinner&Foto</p>
                <p>22.00— Penutupan</p>
            </div>

            <div class="detail-box">
                <h2>Digital Envelope 💌</h2>
                <p>Doa dan hadiah terbaik dari kalian sudah sangat berarti.</p>
                <p>Detail amplop digital menyusul.</p>
            </div>

            <div class="detail-box">
                <h2>RSVP</h2>
                <p>Konfirmasi kehadiran kamu di sini ya!</p>

                <input id="guestName" type="text"
                    placeholder="Nama tamu">

                <select id="guestStatus">
                    <option value="Hadir">Hadir</option>
                    <option value="Tidak hadir">Tidak hadir</option>
                </select>

                <textarea id="guestWish"
                    placeholder="Tulis ucapan dan doa..."></textarea>

                <button onclick="sendRSVP()">Kirim RSVP</button>

                <div id="guestList">
                    <h3>Daftar Ucapan 💛</h3>
                </div>
            </div>

            <h2 class="closing">Thank You!</h2>
            <p>Terima kasih atas doa dan perhatian kalian.</p>
            <p>Kami tunggu kehadiran Anda!</p>

        </section>
    `;
}

function sendRSVP() {
    const name = document.getElementById("guestName").value.trim();
    const status = document.getElementById("guestStatus").value;
    const wish = document.getElementById("guestWish").value.trim();

    if (name === "") {
        alert("Nama tamu belum diisi ya!");
        return;
    }

    const guestList = document.getElementById("guestList");
    const guest = document.createElement("div");

    guest.innerHTML = `
        <hr>
        <p><strong>${escapeHTML(name)}</strong></p>
        <p>Status: ${status}</p>
        <p>${escapeHTML(wish || "Terima kasih!")}</p>
    `;

    guestList.appendChild(guest);

    document.getElementById("guestName").value = "";
    document.getElementById("guestWish").value = "";
}

function escapeHTML(text) {
    const element = document.createElement("div");
    element.textContent = text;
    return element.innerHTML;
}
function toggleMusic() {
    const music = document.getElementById("backgroundMusic");
    const button = document.querySelector(".music-button");

    if (music.paused) {
        music.play();
        button.textContent = "⏸ Jeda Musik";
    } else {
        music.pause();
        button.textContent = "🎵 Putar Musik";
    }
}