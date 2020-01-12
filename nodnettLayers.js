
        // Håndholdt nivå 1 13 -
        // https://ogc.dsb.no/mapserv.ashx?LAYERS=layer_360&QUERYABLE=true&TRANSITIONEFFECT=resize&TRANSPARENT=TRUE&INFOFORMAT=text%2Fhtml&FORMAT=image%2Fpng&VERSION=1.3.0&EXCEPTIONS=XML&GKT=92B32CD6E7E86075D0E0553445FD6D3B85BA957A9B3F1B396E22FDFC69A581CCE53A5FCBFDE83EBC219160D0B6F20977C4910367898DA2D28D018F0853CD0DA1&GUI=3&SERVICE=WMS&REQUEST=GetMap&STYLES=&CRS=EPSG%3A32633&BBOX=265048.04916508,6570473.9619635,302462.87729008,6587673.9932135&WIDTH=1768&HEIGHT=813

        // Håndholdt nivå 2   12 - 10
        // https://ogc.dsb.no/mapserv.ashx?LAYERS=layer_361&QUERYABLE=true&TRANSITIONEFFECT=resize&TRANSPARENT=TRUE&INFOFORMAT=text%2Fhtml&FORMAT=image%2Fpng&VERSION=1.3.0&EXCEPTIONS=XML&GKT=92B32CD6E7E86075D0E0553445FD6D3B85BA957A9B3F1B396E22FDFC69A581CCE53A5FCBFDE83EBC219160D0B6F20977C4910367898DA2D28D018F0853CD0DA1&GUI=3&SERVICE=WMS&REQUEST=GetMap&STYLES=&CRS=EPSG%3A32633&BBOX=134370.0448361,6517720.3537353,433688.6698361,6655320.6037353&WIDTH=1768&HEIGHT=813

        // Håndholdt nivå 3 9 - 8
        //https://ogc.dsb.no/mapserv.ashx?LAYERS=layer_362&QUERYABLE=true&TRANSITIONEFFECT=resize&TRANSPARENT=TRUE&INFOFORMAT=text%2Fhtml&FORMAT=image%2Fpng&VERSION=1.3.0&EXCEPTIONS=XML&GKT=92B32CD6E7E86075D0E0553445FD6D3B85BA957A9B3F1B396E22FDFC69A581CCE53A5FCBFDE83EBC219160D0B6F20977C4910367898DA2D28D018F0853CD0DA1&GUI=3&SERVICE=WMS&REQUEST=GetMap&STYLES=&CRS=EPSG%3A32633&BBOX=-505743.63670795,6489989.2515411,691530.86329205,7040390.2515411&WIDTH=1768&HEIGHT=813

        // Bil nivå 1
        //https://ogc.dsb.no/mapserv.ashx?LAYERS=layer_357&QUERYABLE=true&TRANSITIONEFFECT=resize&TRANSPARENT=TRUE&INFOFORMAT=text%2Fhtml&FORMAT=image%2Fpng&VERSION=1.3.0&EXCEPTIONS=XML&GKT=92B32CD6E7E86075D0E0553445FD6D3B85BA957A9B3F1B396E22FDFC69A581CCE53A5FCBFDE83EBC219160D0B6F20977C4910367898DA2D28D018F0853CD0DA1&GUI=3&SERVICE=WMS&REQUEST=GetMap&STYLES=&CRS=EPSG%3A32633&BBOX=77517.9120236,6632076.1032681,114932.7401486,6649276.1345181&WIDTH=1768&HEIGHT=813
        
        // Bil nivå 2
        //https://ogc.dsb.no/mapserv.ashx?LAYERS=layer_358&QUERYABLE=true&TRANSITIONEFFECT=resize&TRANSPARENT=TRUE&INFOFORMAT=text%2Fhtml&FORMAT=image%2Fpng&VERSION=1.3.0&EXCEPTIONS=XML&GKT=92B32CD6E7E86075D0E0553445FD6D3B85BA957A9B3F1B396E22FDFC69A581CCE53A5FCBFDE83EBC219160D0B6F20977C4910367898DA2D28D018F0853CD0DA1&GUI=3&SERVICE=WMS&REQUEST=GetMap&STYLES=&CRS=EPSG%3A32633&BBOX=77517.9120236,6632076.1032681,114932.7401486,6649276.1345181&WIDTH=1768&HEIGHT=813

        // Bil nivå 3
        // https://ogc.dsb.no/mapserv.ashx?LAYERS=layer_359&QUERYABLE=true&TRANSITIONEFFECT=resize&TRANSPARENT=TRUE&INFOFORMAT=text%2Fhtml&FORMAT=image%2Fpng&VERSION=1.3.0&EXCEPTIONS=XML&GKT=92B32CD6E7E86075D0E0553445FD6D3B85BA957A9B3F1B396E22FDFC69A581CCE53A5FCBFDE83EBC219160D0B6F20977C4910367898DA2D28D018F0853CD0DA1&GUI=3&SERVICE=WMS&REQUEST=GetMap&STYLES=&CRS=EPSG%3A32633&BBOX=-725821.9239139,6365475.6188931,918272.5760861,6915876.6188931&WIDTH=2428&HEIGHT=813

        //https://ogc.dsb.no/mapserv.ashx?LAYERS=layer_361&QUERYABLE=true&TRANSITIONEFFECT=resize&TRANSPARENT=TRUE&INFOFORMAT=text%2Fhtml&FORMAT=image%2Fpng&VERSION=1.3.0&EXCEPTIONS=XML&GKT=92B32CD6E7E86075921304757AC350B11FBFF833DB9C9B05D7CB191AC9AA2C3E827BFAD54BF38BAA43DC0BE55AEC921C3156EA1A4C01D8968D018F0853CD0DA1&GUI=3&SERVICE=WMS&REQUEST=GetMap&STYLES=&CRS=EPSG%3A32633&BBOX=74866.91078344,6837673.574265,447809.28578344,6975273.824265&WIDTH=2203&HEIGHT=813
        //https://ogc.dsb.no/mapserv.ashx?service=WMS&request=GetMap&layers=layer_361&styles=&format=image%2Fpng&transparent=true&version=1.3.0&width=256&height=256&crs=EPSG%3A3857&bbox=1271912.150665333,8355484.4359091865,1291480.029906338,8375052.315150194
        let nodnett_hh_1 = L.tileLayer.wms('https://ogc.dsb.no/mapserv.ashx', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            format: 'image/png',
            layers: 'layer_360',
            transparent: true,
            version: '1.3.0',
            infoformat: 'text/html',
            gkt: '92B32CD6E7E86075921304757AC350B11FBFF833DB9C9B05D7CB191AC9AA2C3E827BFAD54BF38BAA43DC0BE55AEC921C3156EA1A4C01D8968D018F0853CD0DA1',
            gui: '3',

        });

        let nodnett_hh_2 = L.tileLayer.wms('https://ogc.dsb.no/mapserv.ashx', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            format: 'image/png',
            layers: 'layer_361',
            transparent: true,
            version: '1.3.0',
            infoformat: 'text/html',
            gkt: '92B32CD6E7E86075921304757AC350B11FBFF833DB9C9B05D7CB191AC9AA2C3E827BFAD54BF38BAA43DC0BE55AEC921C3156EA1A4C01D8968D018F0853CD0DA1',
            gui: '3',

        });

        let nodnett_hh_3 = L.tileLayer.wms('https://ogc.dsb.no/mapserv.ashx', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            format: 'image/png',
            layers: 'layer_362',
            transparent: true,
            version: '1.3.0',
            infoformat: 'text/html',
            gkt: '92B32CD6E7E86075921304757AC350B11FBFF833DB9C9B05D7CB191AC9AA2C3E827BFAD54BF38BAA43DC0BE55AEC921C3156EA1A4C01D8968D018F0853CD0DA1',
            gui: '3',

        });

        let nodnett_bil_1 = L.tileLayer.wms('https://ogc.dsb.no/mapserv.ashx', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            format: 'image/png',
            layers: 'layer_357',
            transparent: true,
            version: '1.3.0',
            infoformat: 'text/html',
            gkt: '92B32CD6E7E86075921304757AC350B11FBFF833DB9C9B05D7CB191AC9AA2C3E827BFAD54BF38BAA43DC0BE55AEC921C3156EA1A4C01D8968D018F0853CD0DA1',
            gui: '3',
            minZoom:13,
            maxZoom: 15,
        });

        let nodnett_bil_2 = L.tileLayer.wms('https://ogc.dsb.no/mapserv.ashx', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            format: 'image/png',
            layers: 'layer_358',
            transparent: true,
            version: '1.3.0',
            infoformat: 'text/html',
            gkt: '92B32CD6E7E86075921304757AC350B11FBFF833DB9C9B05D7CB191AC9AA2C3E827BFAD54BF38BAA43DC0BE55AEC921C3156EA1A4C01D8968D018F0853CD0DA1',
            gui: '3',
        });

        let nodnett_bil_3 = L.tileLayer.wms('https://ogc.dsb.no/mapserv.ashx', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            format: 'image/png',
            layers: 'layer_359',
            transparent: true,
            version: '1.3.0',
            infoformat: 'text/html',
            gkt: '92B32CD6E7E86075921304757AC350B11FBFF833DB9C9B05D7CB191AC9AA2C3E827BFAD54BF38BAA43DC0BE55AEC921C3156EA1A4C01D8968D018F0853CD0DA1',
            gui: '3',
        });