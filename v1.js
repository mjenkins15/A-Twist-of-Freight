freight: {
    datasets: [{
        : 'type', (If only 1 item, no comma at all)
        name: 'type2' (last item NO comma! If only 1 item, no comma)
    }]
},
freight: {
    datasets: [{
        backgroundColor: 'Green', || 'rgba(123,123,123,0.1)', || '#00FF00',
        borderColor: 'Green', || 'rgba(123,123,123,0.1)', || '#00FF00',
        borderWidth: 1,
        data: {x: 5, y: 10, r: 10 }, {x: 15, y: 3, r: 15 }, {x: 7, y: 15, r: 30 }
        hoverBackgroundColor: 'Green', || 'rgba(123,123,123,0.1)', || '#00FF00',
        hoverBorderColor: 'Green', || 'rgba(123,123,123,0.1)', || '#00FF00',
        hoverBorderWidth: 3,
        hoverRadius: 3,
        hitRadius: 5,
        label: 'This is my label',
        pointStyle: 'circle' || 'cross' || 'crossRot' || 'dash' || 'line' || 'rect' || 'rectRounded' || 'rectRot' || 'star' || 'triangle',
        rotation: 0,
        radius: 3
    }]
},

