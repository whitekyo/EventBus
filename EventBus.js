(function($){
    var EventBus = {};

    /**
     * 注册
     */
    EventBus._register = function(type, args, async){
        var listeners = [];
        
        if(typeof type === void 0){
            return this;
        }

        if(typeof args === "function"){
            listeners.push(args);
        }
        else if(Object.prototype.toString.call(args) === "[object Array]"){
            listeners.concat(args);
        }

        return {
            type: type,
            listeners: listeners,
            async: async
        };
    }

    EventBus.register = function(type, args, async){

        var o = this._register.apply(this, arguments);
        
        if(type === "click"){
            
        }
        

    };

    /**
     * 分发
     */
    EventBus.post = function(type){
        if(typeof type === void 0){
            return this;
        }
    };

    /**
     * 广播
     */
    EventBus.broadcast = function(){
        return ;
    };

})($);