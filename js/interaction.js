var dataset = [ 5, 10, 15, 20, 25, 5, 10, 15, 20, 25, 5, 10, 15, 20, 25 ];

            d3.select("body").selectAll("p")
                .data(dataset)
                .enter()
                .append("p")
                .text("New paragraph!");