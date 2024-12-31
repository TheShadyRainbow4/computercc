<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ComputerCare Co. Computer Repair, Rehabilitation & Recycling</title>
    <style>
        /* Basic styles */
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            overflow-x: hidden;
        }

        header {
            background-color: #333;
            color: #fff;
            padding: 20px 0;
            text-align: center;
            position: sticky;
            top: 0;
            z-index: 1000;
        }

        nav ul {
            list-style: none;
            padding: 0;
            display: flex;
            justify-content: center;
        }

        nav li {
            margin: 0 15px;
        }

        nav a {
            color: #fff;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s;
        }

        nav a:hover {
            color: #ffcc00;
        }

        footer {
            background-color: #333;
            color: #fff;
            text-align: center;
            padding: 10px 0;
            position: fixed;
            width: 100%;
            bottom: 0;
        }

        /* Animation styles */
        h1 {
            animation: fadeInDown 1s ease-out;
        }

        @keyframes fadeInDown {
            from {
                opacity: 0;
                transform: translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        section {
            padding: 50px 20px;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease-out, transform 0.6s ease-out;
        }

        section.visible {
            opacity: 1;
            transform: translateY(0);
        }
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

    <!-- Example sections -->
    <section id="about">
        <h2>About Us</h2>
        <p>Information about the company.</p>
    </section>
    <section id="services">
        <h2>Our Services</h2>
        <p>Details about services offered.</p>
    </section>
    <section id="recycling">
        <h2>Recycling</h2>
        <p>Recycling information.</p>
    </section>
    <section id="contact">
        <h2>Contact Us</h2>
        <p>Contact details.</p>
    </section>
    <section id="inquiries">
        <h2>General Inquiries</h2>
        <p>Information for general inquiries.</p>
    </section>

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

        // Intersection Observer for section animations
        const sections = document.querySelectorAll('section');
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        sections.forEach(section => {
            observer.observe(section);
        });
    </script>
</body>
</html>