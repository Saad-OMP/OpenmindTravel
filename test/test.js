// Tab switching functionality for the search panel
document.querySelectorAll('.tab-link').forEach(tab => {
    tab.addEventListener('click', function() {
        let tab_id = this.dataset.tab;

        document.querySelectorAll('.tab-link').forEach(tab => {
            tab.classList.remove('current');
        });

        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('current');
        });

        this.classList.add('current');
        document.getElementById(tab_id).classList.add('current');
    });
});
