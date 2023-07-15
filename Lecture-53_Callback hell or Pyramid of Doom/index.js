// Callbacks
function loadScript(src, callback) {
    var script = document.createElement("script");
    script.src = src;
    script.onload = function() {
            console.log("Loaded script with SRC: " + src)
            callback(null, src);
    }
    script.onerror = function() {
            console.log("Error loading script with SRC: " + src);
            callback(new Error("Src got some error"))
    }
    document.body.appendChild(script);
}

function hello(error, src) {
    if (error) {
            console.log(error)
            return
    }
    alert('Hello World!' + src);
}


/*
<!-- when we have callback insude callbacks, the code gets difficult to manage,
as ceels become more nested the codes become deeper and increasing more difficult to manage,
the pyramid of this cells grows toward the right with every async action and goes out of control
this way of coding is't very good. -->*/

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js", function goodmorning(error, src) {
    if (error) {
            console.log(error)
            sendEmergencyMessageToCeo();
            return
    }
    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap2.bundle.min.js", function goodmorning(error, src) {
            if (error) {
                    console.log(error)
                    sendEmergencyMessageToCeo();
                    return
            }
            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap3.bundle.min.js", function goodmorning(error, src) {
                    if (error) {
                            console.log(error)
                            sendEmergencyMessageToCeo();
                            return
                    }
                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap4.bundle.min.js", function goodmorning(error, src) {
                            if (error) {
                                    console.log(error)
                                    sendEmergencyMessageToCeo();
                                    return
                            }
                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap5.bundle.min.js", function goodmorning(error, src) {
                                    if (error) {
                                            console.log(error)
                                            sendEmergencyMessageToCeo();
                                            return
                                    }
                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap6.bundle.min.js", function goodmorning(error, src) {
                                            if (error) {
                                                    console.log(error)
                                                    sendEmergencyMessageToCeo();
                                                    return
                                            }
                                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap7.bundle.min.js", function goodmorning(error, src) {
                                                    if (error) {
                                                            console.log(error)
                                                            sendEmergencyMessageToCeo();
                                                            return
                                                    }
                                                    loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap8.bundle.min.js", function goodmorning(error, src) {
                                                            if (error) {
                                                                    console.log(error)
                                                                    sendEmergencyMessageToCeo();
                                                                    return
                                                            }
                                                            loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap9.bundle.min.js", function goodmorning(error, src) { })
                                                    })
                                            })
                                    })
                            })
                    })
            })
    })
})
