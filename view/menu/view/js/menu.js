$(document).ready(function () {
    // console.log("menu");
    slider();
    // click_car();
    offer_type();
    offer_brand();
    autocomplete();
    enter();
    click_search()

})

var menu = function (url, data) { //function/promise GENERAL 

    // console.log(data)

    return new Promise(function (resolve) {
        // console.log(url)
        // console.log(data)
        $.ajax({
            type: "POST",
            url: url,
            data: data
        })
            .done(function (data) {
                resolve(data);
            })
    })
};


///FUNCION PARA IMAGENES DEL SLIDER
function slider() {

    var info = { module: 'menu', function: 'slider' }

    menu(amigable("?"), info)
        .then(function (data) {


            // console.log(data)
            var data = (JSON.parse(data));
            $('<div></div>').attr('class', "carousel-item active").appendTo('.carousel-inner').html(
                '<img src="' + data[1].route + '" class="car" alt="...">'
            );
            $('<div></div>').attr('class', "carousel-item").appendTo('.carousel-inner').html(
                '<img src="' + data[1].route + '" class="car" alt="...">',
            );
            $('<div></div>').attr('class', "carousel-item").appendTo('.carousel-inner').html(
                '<img src="' + data[2].route + '" class="car" alt="...">'
            );
        })
}

///FUNCION PARA QUE SI CLICKAS EN EL CAROUSEL TE LLEVE AL SHOP
function click_car() {
    $(document).on('click', '.car', function () {
        var car = this.getAttribute('src');
        localStorage.setItem('sli', car);
        $(window).attr('location', 'index.php?page=controller_shop&op=list')
    })
}

///FUNCION PARA QUE AYUDE CON LOS TIPOS
function offer_type() {
    // console.log("offer_type")
    br = "where 1=1"

    var info = { module: 'menu', function: 'type', data: br }

    menu(amigable("?"), info)
        .then(function (data) {

            console.log(data)
            data = JSON.parse(data)
            console.log(data)
            $("#type").empty();

            $("#type").append(
                '<option value="0">Type of Jewerly</option>'
            )
            for (row in data) {
                // console.log(data[row])
                $("#type").append(
                    '<option value="' + data[row].tipo + '">' + data[row].tipo + '</option>'
                )
            }
        })


    $("#brand").on("change", function () {

        var brand = $("#brand").val();
        console.log("brand=" + brand)
        var type = $("#type").val();
        console.log("type=" + type)

        if ((brand === "") || (brand == 0)) {
            br = "where 1=1";
            console.log(br);
        } else {
            br = ' where marca = "' + brand + '" '
            console.log(br);
        }


        var info = { module: 'menu', function: 'type', data: br }

        menu(amigable("?"), info)
            .then(function (data) {
                data = JSON.parse(data);

                console.log(data);
                $("#type").empty();

                $("#type").append(
                    '<option value="0">Type of Jewerly</option>'
                )
                for (row in data) {
                    // console.log(data[row])
                    $("#type").append(
                        '<option value="' + data[row].tipo + '">' + data[row].tipo + '</option>'
                    )
                }
                $("#type option[value=" + type + "]").attr("selected", true);

            })
    })

}

///FUNCION PARA QUE AYUDE CON LAS MARCAS
function offer_brand() {
    var ty = "where 1=1"



    var info = { module: 'menu', function: 'brand', data: ty }

    menu(amigable("?"), info)
        .then(function (data) {

            data = JSON.parse(data);
            // console.log(data);
            $("#brand").empty();

            $("#brand").append(
                '<option value="0">Brand</option>'
            )
            for (row in data) {
                // console.log(data[row])

                $("#brand").append(
                    '<option value="' + data[row].marca + '">' + data[row].marca + '</option>'
                )
            }
        });

    $("#type").on("change", function () {



        var brand = $("#brand").val();
        console.log("brand=" + brand)
        var type = $("#type").val();
        console.log("type=" + type)

        if ((type === "") || (type == 0)) {
            ty = "where 1=1";
            console.log(ty);
        } else {
            ty = ' where tipo = "' + type + '" '
            console.log(ty);
        }
        var info = { module: 'menu', function: 'brand', data: ty }

        menu(amigable("?"), info)
            .then(function (data) {

                data = JSON.parse(data);
                console.log(data);
                $("#brand").empty();

                $("#brand").append(
                    '<option value="0">Brand</option>'
                )
                for (row in data) {
                    // console.log(data[row])

                    $("#brand").append(
                        '<option value="' + data[row].marca + '">' + data[row].marca + '</option>'
                    )
                }

                $("#brand option[value=" + brand + "]").attr("selected", true);


            });
    });
}

///FUNCION PARA QUE AUTOCOMPLETE PRODUCTOS
function autocomplete() {
    $("#type,#brand").on("change", function () {

        $("#products").empty();

        var brand = $("#brand").val();
        console.log("brand=" + brand)
        var type = $("#type").val();
        console.log("type=" + type)

        if ((brand != 0) && (type != 0)) {
            aut = 'where tipo= "' + type + '" and marca="' + brand + '"'
            console.log(aut);
        } else if ((brand != 0) && (type == 0)) {
            aut = 'where marca="' + brand + '"'
            console.log(aut);
        } else if ((brand == 0) && (type != 0)) {
            aut = 'where tipo= "' + type + '"'
            console.log(aut);
        } else if ((brand == 0) && (type == 0)) {
            aut = ''
            console.log(aut);
        }

        var info = { module: 'menu', function: 'autocomplete', data: aut }

        menu(amigable("?"), info)
            .then(function (data) {
data=JSON.parse(data)
                console.log(data)
                var name = []
                for (row in data) {
                    name.push(data[row].nombre);
                }

                console.log(name);
                for (i = 0; i < name.length; i++) {
                    console.log(name[i]);
                    // console.log(name[row])
                    $("#products").append(
                        '<option value="' + name[i] + '">' + name[i] + '</option>'
                    )
                }
            })
    })
}

function click_search() {
    $(".a").on("click", function () {

        var type = $("#type").val();
        console.log("type=" + type)
        var brand = $("#brand").val();
        console.log("brand=" + brand)
        var product = $("#autocomplete").val();
        console.log("product=" + product)


        localStorage.setItem('typ', type);
        localStorage.setItem('bra', brand);
        localStorage.setItem('pro', product);

        $(window).attr('location', amigable('?module=shop'))

    })
}

function enter() {
    $('#autocomplete').keypress(function (event) {
        var keycode = (event.keyCode ? event.keyCode : event.which);
        if (keycode == '13') {
            alert('You pressed a "enter" key in textbox');
            var type = $("#type").val();
            console.log("type=" + type)
            var brand = $("#brand").val();
            console.log("brand=" + brand)
            var product = $("#autocomplete").val();
            console.log("product=" + product)


            localStorage.setItem('typ', type);
            localStorage.setItem('bra', brand);
            localStorage.setItem('pro', product);
            $(window).attr('location', amigable('?module=shop'))
        }
    });
}