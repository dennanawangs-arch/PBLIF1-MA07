<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Kas Kelas</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: Arial, sans-serif;
        }

        body {
            background-color: #f4f6f9;
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            border-top: 13px solid #3169df;
        }

        .login-container {
            width: 580px;
            min-height: 676px;
            background-color: white;
            border: 1px solid #c5d2e2;
            border-radius: 20px;
            padding: 46px 88px;
            text-align: center;
        }

        .login-container h1 {
            color: #19334e;
            font-size: 32px;
            margin-bottom: 10px;
        }

        .subtitle {
            color: #718096;
            font-size: 18px;
            margin-bottom: 30px;
        }

        /* Styling Pilihan Role (Bendahara / Anggota) */
        .role-selection {
            display: flex;
            background-color: #e2e8f0;
            border-radius: 10px;
            padding: 4px;
            margin-bottom: 35px;
        }

        .role-btn {
            flex: 1;
            padding: 10px 0;
            border: none;
            background: transparent;
            color: #4a5568;
            font-size: 15px;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease;
        }

        .role-btn.active {
            background-color: #3169df;
            color: white;
            box-shadow: 0px 2px 6px rgba(49, 105, 223, 0.3);
        }

        .form-group {
            text-align: left;
            margin-bottom: 30px;
        }

        .form-group label {
            display: block;
            color: #64748b;
            font-size: 15px;
            margin-bottom: 8px;
        }

        .form-group input {
            width: 100%;
            height: 49px;
            padding: 12px 14px;
            border: 1px solid #c5d2e2;
            border-radius: 8px;
            outline: none;
            font-size: 15px;
        }

        .form-group input:focus {
            border-color: #3169df;
        }

        .form-group input::placeholder {
            color: #9aa9bc;
        }

        .btn-login {
            width: 100%;
            height: 45px;
            background-color: #3169df;
            color: white;
            border: none;
            border-radius: 9px;
            font-size: 15px;
            font-weight: bold;
            cursor: pointer;
            transition: background 0.2s;
        }

        .btn-login:hover {
            background-color: #2457c5;
        }

        .register {
            margin-top: 34px;
            font-size: 15px;
        }

        .register a {
            color: #3169ff;
            text-decoration: none;
        }

        .register a:hover {
            text-decoration: underline;
        }

        .footer {
            color: #718096;
            font-size: 15px;
            margin-top: 50px;
        }

        @media (max-width: 650px) {
            .login-container {
                width: 90%;
                min-height: auto;
                padding: 40px 25px;
            }

            .login-container h1 {
                font-size: 27px;
            }

            .subtitle {
                font-size: 16px;
                margin-bottom: 25px;
            }

            .footer {
                margin-top: 40px;
            }
        }
    </style>
</head>

<body>

    <div class="login-container">

        <h1>KAS KELAS</h1>
        <p class="subtitle">Masuk ke akun Anda</p>

        <!-- Pilihan Akses Masuk -->
        <div class="role-selection">
            <button type="button" class="role-btn active" onclick="setRole('anggota')">Anggota</button>
            <button type="button" class="role-btn" onclick="setRole('bendahara')">Bendahara</button>
        </div>

        <form id="loginForm" action="dashboard_anggota.html" method="POST">

            <!-- Input tersembunyi untuk menyimpan role saat submit ke backend -->
            <input type="hidden" id="role" name="role" value="anggota">

            <div class="form-group">
                <label for="username">NIM / Username</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Masukkan NIM atau username"
                    required
                >
            </div>

            <div class="form-group">
                <label for="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Masukkan password"
                    required
                >
            </div>

            <button type="submit" class="btn-login" id="btnSubmit">
                MASUK SEBAGAI ANGGOTA
            </button>

        </form>

        <div class="register">
            <a href="register.html">
                Belum punya akun? Daftar di sini
            </a>
        </div>

        <div class="footer">
            Aplikasi Pengelolaan Iuran Kas Kelas
        </div>

    </div>

    <script>
        function setRole(role) {
            const buttons = document.querySelectorAll('.role-btn');
            const loginForm = document.getElementById('loginForm');
            const roleInput = document.getElementById('role');
            const btnSubmit = document.getElementById('btnSubmit');

            // Hapus kelas 'active' dari semua tombol
            buttons.forEach(btn => btn.classList.remove('active'));

            if (role === 'bendahara') {
                buttons[1].classList.add('active');
                loginForm.action = 'dashboard_bendahara.html';
                roleInput.value = 'bendahara';
                btnSubmit.textContent = 'MASUK SEBAGAI BENDAHARA';
            } else {
                buttons[0].classList.add('active');
                loginForm.action = 'dashboard_anggota.html';
                roleInput.value = 'anggota';
                btnSubmit.textContent = 'MASUK SEBAGAI ANGGOTA';
            }
        }
    </script>

</body>
</html>
