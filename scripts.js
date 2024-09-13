// Disable right-click
document.addEventListener('contextmenu', event => event.preventDefault());

// Initialize Vue App
new Vue({
    el: '#app',
    data: {
        yearProgress: 0,
        dayOfYear: 0,
        daysInYear: 0,
        currentDate: ''
    },
    mounted() {
        // Calculate year progress on mount
        this.calculateYearProgress();
        // Update year progress every day
        setInterval(this.calculateYearProgress, 86400000);
    },
    methods: {
        // Calculate year progress
        calculateYearProgress() {
            const now = moment();
            const startOfYear = moment().startOf('year');
            const endOfYear = moment().endOf('year');
            const yearElapsed = now.diff(startOfYear, 'milliseconds');
            const totalYear = endOfYear.diff(startOfYear, 'milliseconds');
            this.yearProgress = (yearElapsed / totalYear) * 100;
            this.dayOfYear = now.diff(startOfYear, 'days');
            this.daysInYear = endOfYear.diff(startOfYear, 'days');
            this.currentDate = now.format('MMMM Do YYYY');
        }
    }
});