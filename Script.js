function calculate() {
    const employees = document.getElementById('employees').value;
    const floors = document.getElementById('floors').value;
    const waterPerPerson = document.getElementById('waterPerPerson').value;
    const flowPerFloor = document.getElementById('flowPerFloor').value;
    const efficiency = document.getElementById('efficiency').value;

    // Hitung total kebutuhan air per hari
    const totalWater = employees * waterPerPerson;

    // Hitung total aliran air (LPM)
    const totalFlow = flowPerFloor * floors;

    // Hitung daya pompa (kW)
    const density = 1.0; // Berat jenis air dalam kg/L
    const pressure = 2; // Tekanan dalam bar, diubah ke meter setara dengan 20.4
    const height = pressure * 10.2; // Tinggi manometrik dalam meter
    const power = (density * totalFlow * height) / (efficiency * 1000);

    // Tampilkan hasil
    document.getElementById('totalWater').innerText = totalWater;
    document.getElementById('totalFlow').innerText = totalFlow;
    document.getElementById('pumpPower').innerText = power.toFixed(2);
}
