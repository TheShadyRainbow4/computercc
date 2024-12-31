<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ComputerCare Co. Computer Repair, Rehabilitation & Recycling</title>
    <style>
        /* Existing styles remain unchanged */
    </style>
</head>
<body>
    <header>
        <h1>ComputerCare Co. Computer Repair, Rehabilitation & Recycling</h1>
        <nav>
            <ul>
                <li><a href="#about">About</a></li>
                <li><a href="#services">Services</a></li>
                <li><a href="#recycling">Recycling</a></li>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#inquiries">General Inquiries</a></li>
            </ul>
        </nav>
    </header>

    <!-- Sections remain unchanged -->

    <footer>
        <p>&copy; 2023 ComputerCare Co. Computer Repair, Rehabilitation & Recycling. All rights reserved.</p>
    </footer>

    <script>
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            });
        });
    </script>
</body>
</html>
