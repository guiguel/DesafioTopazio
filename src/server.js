const app =  require('./app');
const PORT = 3030;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});