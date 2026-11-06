<script>
        function switchRole(role) {
            const bendaharaSec = document.getElementById('bendahara-section');
            const anggotaSec = document.getElementById('anggota-section');
            const navRole = document.getElementById('nav-role');
            const buttons = document.querySelectorAll('.tab-btn');

            if (role === 'bendahara') {
                bendaharaSec.classList.add('active-section');
                anggotaSec.classList.remove('active-section');
                navRole.innerText = 'BENDAHARA';
                buttons[0].classList.add('active');
                buttons[1].classList.remove('active');
            } else {
                anggotaSec.classList.add('active-section');
                bendaharaSec.classList.remove('active-section');
                navRole.innerText = 'ANGGOTA';
                buttons[1].classList.add('active');
                buttons[0].classList.remove('active');
            }
        }
    </script>
