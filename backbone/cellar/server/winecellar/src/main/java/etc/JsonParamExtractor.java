package etc;

import java.util.Map;

import ninja.Context;
import ninja.params.ArgumentExtractor;

public class JsonParamExtractor implements
        ArgumentExtractor<Map> {

    @Override
    public Map extract(Context context) {
        context.getRequestContentType();
        return null;
    }

    @Override
    public Class<Map> getExtractedType() {
        return Map.class;
    }

    @Override
    public String getFieldName() {
        return null;
    }
    
}
