Link to dockerhub image: https://hub.docker.com/repository/docker/juholehtimaki/node-server

Commands used to deploy the image in k3d:

<pre><font color="#4E9A06"><b>juho@Juho</b></font>:<font color="#3465A4"><b>~/school/devopswithk8s/part1/exercise1.04/manifests</b></font>$ kubectl apply -f deployment.yaml
deployment.apps/node-server created
<font color="#4E9A06"><b>juho@Juho</b></font>:<font color="#3465A4"><b>~/school/devopswithk8s/part1/exercise1.04/manifests</b></font>$ kubectl get deployments
NAME          READY   UP-TO-DATE   AVAILABLE   AGE
date-app      1/1     1            1           4m19s
node-server   1/1     1            1           32s
<font color="#4E9A06"><b>juho@Juho</b></font>:<font color="#3465A4"><b>~/school/devopswithk8s/part1/exercise1.04/manifests</b></font>$ kubectl get pods
NAME                          READY   STATUS    RESTARTS   AGE
date-app-566c8bd749-fcxzz     1/1     Running   0          4m25s
node-server-857c4bb86-d5rzr   1/1     Running   0          38s
<font color="#4E9A06"><b>juho@Juho</b></font>:<font color="#3465A4"><b>~/school/devopswithk8s/part1/exercise1.04/manifests</b></font>$ kubectl logs -f node-server-857c4bb86-d5rzr
Server started in port 3000
</pre>
