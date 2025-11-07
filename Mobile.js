 const menuContainer = document.getElementById('menu');
        const menuButton = document.querySelector('.menu-button');
        const menuItems = document.querySelectorAll('.menu-items a');
        const selectedName = document.getElementById('selected-name');

        menuButton.addEventListener('click', () => {
            menuContainer.classList.toggle('active');
        });

        menuItems.forEach(item => {
            item.addEventListener('click', () => {
                menuItems.forEach(i => i.classList.remove('active'));
                item.classList.add('active');
                const itemName = item.querySelector('span').innerText;
                selectedName.innerText = itemName;
            });
        });