// Nesting
setTimeout(() => {
    document.body.style.background = 'red';
    setTimeout(() => {
        document.body.style.background = 'orange';
        setTimeout(() => {
            document.body.style.background = 'yellow';
            setTimeout(() => {
                document.body.style.background = 'green';
                setTimeout(() => {
                    document.body.style.background = 'blue';
                    setTimeout(() => {
                        document.body.style.background = 'indigo';
                        setTimeout(() => {
                            document.body.style.background = 'violet';
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)