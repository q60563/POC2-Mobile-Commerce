package com.androidlibrary.module.backend.api;

import android.content.Context;

import com.androidlibrary.module.ApiParams;
import com.androidlibrary.module.backend.ApiUrls;
import com.androidlibrary.module.backend.data.ProcessingData;
import com.androidlibrary.module.backend.params.ParamsConst;
import com.androidlibrary.module.backend.request.AuthTokenPostRequest;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by 依杰 on 2018/7/14.
 */

public class ApiV1NormalConnectLdapPost<T extends ProcessingData> extends AuthTokenPostRequest<T> {
    public ApiV1NormalConnectLdapPost(Context context, ApiParams params) {
        super(context, params);
    }

    @Override
    protected String getUrl() {
        return ApiUrls.apiV1ConnectLdap(getParams());
    }

    @Override
    protected Map<String, String> getPostParams() {
        HashMap<String, String> params = new HashMap<>();
        params.put(ParamsConst.Key.LDAP_TOKEN, getParams().inputLdapToken);
        return params;
    }
}