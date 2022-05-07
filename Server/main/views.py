import json
from django.shortcuts import render
from django.http import HttpResponse
from django.views.decorators.csrf import csrf_exempt

# Create your views here.
# TODO this is while there is no login, csrftoken cookie needs to be setup
@csrf_exempt 
def isolatedServers(request):
    body = json.loads(request.body)
    if request.method == 'POST':
        # Import GPG Key
        IsolatedServerHostname = body['input']
        File = body['input_file']
    elif request.method == 'DELETE':
        # Delete GPG Key
        IsolatedServerHostname = body['input']
        File = body['gpgKeyID']
    else:
        return HttpResponse(status=500)
    return render(request,'hello.html',{'name': 'Ema'})

@csrf_exempt
def users(request):
    body = json.loads(request.body)
    if request.method == 'POST':
        # Create Users
        LoginID = body['LoginIDCreate']
        password = body['passwordCreate']
        dropdown = body['dropdownCreate']
        checkboxItems = body['checkboxItemsCreate']
    elif request.method == 'PUT':
        # Reset User
        LoginID =body['LoginIDReset']
        password = body['passwordReset']
        userType = body['userTypeReset']
        checkboxItems = body['checkboxItemsReset']
    else:
        return HttpResponse(status=500)

    return render(request,'hello.html',{'name': 'Ema'})

@csrf_exempt
def gpg(request):
    # Do the importing
    body = json.loads(request.body)
    if request.method == 'POST':
        # Create Key
        gpgKey = body['gpgKeyCreate']
    elif request.method == 'PUT':
        # Reset Key
        gpgKey =body['gpgKeyReset']
    else:
        return HttpResponse(status=500)

    return render(request,'hello.html',{'name': 'Ema'})

@csrf_exempt
def exportGPGKey(request):
    # Do the export
    body = json.loads(request.body)
    if request.method == 'POST':
        # Export logic
        pass
    else:
        return HttpResponse(status=500)
    return render(request,'hello.html',{'name': 'Ema'})

@csrf_exempt
def mfa(request):
    # Do the importing
    body = json.loads(request.body)
    if request.method == 'POST':
        # Create Key
        mfa = body['mfaCreate']
    elif request.method == 'PUT':
        # Reset Key
        mfa =body['mfaReset']
    else:
        return HttpResponse(status=500)

    return render(request,'hello.html',{'name': 'Ema'})