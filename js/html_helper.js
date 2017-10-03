class Tag{
    constructor(element, content, classes = [], id = ""){
        this.Element = element;
        this.Start = element;       
        this.End = "</" + element + ">"; 
        this.Content = content;        
        this.setClass(classes);
        this.id = id;
    }
    
    setClass(classes = []){
        var result = '';
        classes.forEach(function(element) {
            result += element + " ";
        });
        this.Classes = result;
    }
    
    render(){
        this.Start = "<" + this.Element + ' class="' + this.Classes + '" id="' + this.id + '">';
        return this.Start + this.Content + this.End;
    }
}

class Html {
    static TD(content, cssClass = [], id = ""){
            var td = new Tag('td', content, cssClass, id);
            return td.render();
    }
    static TH(content, cssClass = [], id = ""){
            var th = new Tag('th', content, cssClass, id);
            return th.render();
    }    
    static TR(rows, cssClass = [], id = ""){
        var rowContent;
            rows.forEach(function(element) {
                      rowContent += element;
                  });                
            var tr = new Tag('tr', rowContent, cssClass, id);
            return tr.render();
    }  
    
    static Option(value, description, selected = false){
        if (selected) {
            return '<option value="' + value + '" selected>' + description + '</option>';
        }else {
            return '<option value="' + value + '">' + description + '</option>';
        }
        
    }
    
    static Select(options, cssClass = [], id = ""){
        var optionsContent;
            options.forEach(function(element) {
                      optionsContent += element;
                  });                
            var select = new Tag('select', optionsContent, cssClass, id);
            return select.render();        
    }    
}
