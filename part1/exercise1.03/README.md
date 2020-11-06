Link to dockerhub image: https://hub.docker.com/repository/docker/juholehtimaki/date-app

Commands used to deploy the image in k3d:

<pre><font color="#4E9A06"><b>juho@Juho</b></font>:<font color="#3465A4"><b>~/school/devopswithk8s/part1/exercise1.03/manifests</b></font>$ kubectl apply -f deployment.yaml
deployment.apps/date-app created
<font color="#4E9A06"><b>juho@Juho</b></font>:<font color="#3465A4"><b>~/school/devopswithk8s/part1/exercise1.03/manifests</b></font>$ kubectl get deployments
NAME          READY   UP-TO-DATE   AVAILABLE   AGE
node-server   1/1     1            1           13m
date-app      1/1     1            1           11s
<font color="#4E9A06"><b>juho@Juho</b></font>:<font color="#3465A4"><b>~/school/devopswithk8s/part1/exercise1.03/manifests</b></font>$ kubectl get pods
NAME                          READY   STATUS    RESTARTS   AGE
node-server-857c4bb86-nkgnh   1/1     Running   0          13m
date-app-566c8bd749-fcxzz     1/1     Running   0          16s
<font color="#4E9A06"><b>juho@Juho</b></font>:<font color="#3465A4"><b>~/school/devopswithk8s/part1/exercise1.03/manifests</b></font>$ kubectl logs -f date-app-566c8bd749-fcxzz
2020-11-06T22:57:29.261Z
2020-11-06T22:57:34.266Z
2020-11-06T22:57:39.271Z
2020-11-06T22:57:44.276Z
2020-11-06T22:57:49.281Z
2020-11-06T22:57:54.282Z</pre>
