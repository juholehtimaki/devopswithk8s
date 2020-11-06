Link to dockerhub image: https://hub.docker.com/repository/docker/juholehtimaki/node-server

Commands used to deploy the image in k3d:

<pre><font color="#4E9A06"><b>juho@Juho</b></font>:<font color="#3465A4"><b>~/school/devopswithk8s/part1/exercise1.02</b></font>$ kubectl create deployment node-server --image=juholehtimaki/node-server:first
deployment.apps/node-server created
</pre>

<pre><font color="#4E9A06"><b>juho@Juho</b></font>:<font color="#3465A4"><b>~/school/devopswithk8s/part1/exercise1.02</b></font>$ kubectl get deployments
NAME          READY   UP-TO-DATE   AVAILABLE   AGE
date-app      1/1     1            1           31h
node-server   1/1     1            1           41s
</pre>

<pre><font color="#4E9A06"><b>juho@Juho</b></font>:<font color="#3465A4"><b>~/school/devopswithk8s/part1/exercise1.02</b></font>$ kubectl get pods
NAME                          READY   STATUS    RESTARTS   AGE
date-app-566c8bd749-w7rrs     1/1     Running   1          31h
node-server-857c4bb86-nkgnh   1/1     Running   0          42s
</pre>

<pre><font color="#4E9A06"><b>juho@Juho</b></font>:<font color="#3465A4"><b>~/school/devopswithk8s/part1/exercise1.02</b></font>$ kubectl logs -f node-server-857c4bb86-nkgnh
Server started in port 3000
</pre>
